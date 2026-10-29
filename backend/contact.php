<?php
/**
 * Number9 - Secure Contact Form API Endpoint
 * 
 * Works both with private directory outside public_html:
 *   /home/uXXXX/public_html/backend/contact.php
 *   /home/uXXXX/number9-private/
 * and in local development environments.
 */

define('NUMBER9_BACKEND', true);

error_reporting(E_ALL);
ini_set('display_errors', '0');

// Locate the private directory outside public_html or in local directory
$candidatePrivateDirs = [
    dirname(__DIR__, 2) . '/number9-private',
    dirname(__DIR__) . '/number9-private',
    __DIR__ . '/../number9-private',
    __DIR__ . '/number9-private',
    __DIR__,
];

$privateDir = null;
foreach ($candidatePrivateDirs as $dir) {
    if (is_dir($dir) && file_exists($dir . '/config.php')) {
        $privateDir = realpath($dir) ?: $dir;
        break;
    }
}

if (!$privateDir) {
    $privateDir = dirname(__DIR__, 2) . '/number9-private';
}

define('NUMBER9_PRIVATE_DIR', rtrim($privateDir, '/\\'));

// Load configuration and rate limiter from private directory
require_once NUMBER9_PRIVATE_DIR . '/config.php';
require_once NUMBER9_PRIVATE_DIR . '/rate_limit.php';

// Autoload PHPMailer from private directory
if (file_exists(NUMBER9_PRIVATE_DIR . '/vendor/autoload.php')) {
    require_once NUMBER9_PRIVATE_DIR . '/vendor/autoload.php';
} else {
    require_once NUMBER9_PRIVATE_DIR . '/PHPMailer/Exception.php';
    require_once NUMBER9_PRIVATE_DIR . '/PHPMailer/PHPMailer.php';
    require_once NUMBER9_PRIVATE_DIR . '/PHPMailer/SMTP.php';
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Standardized JSON response helper
function json_response($statusCode, $data) {
    http_response_code($statusCode);
    header('Content-Type: application/json; charset=UTF-8');
    header('X-Content-Type-Options: nosniff');
    echo json_encode($data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

// Clean string for safe use in email headers (prevent email header injection)
function sanitize_header_string($string) {
    return trim(str_replace(["\r", "\n", "%0a", "%0d", "\0"], '', (string) $string));
}

// Fetch configuration from private environment
$config = get_app_config();

// -------------------------------------------------------------
// 1. CORS & HTTP METHOD VALIDATION
// -------------------------------------------------------------
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
$allowedOrigins = $config['security']['allowed_origins'];

if ($origin !== '') {
    if (in_array($origin, $allowedOrigins, true)) {
        header("Access-Control-Allow-Origin: {$origin}");
        header('Access-Control-Allow-Credentials: true');
    }
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Accept, X-Requested-With');
    header('Access-Control-Max-Age: 86400');
}

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Only POST method is permitted
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST, OPTIONS');
    json_response(405, [
        'success' => false,
        'message' => 'Method Not Allowed. Only POST requests are accepted.',
    ]);
}

// -------------------------------------------------------------
// 2. RATE LIMITING (Stored securely in private storage directory)
// -------------------------------------------------------------
$clientIp = get_client_ip();
$privateStorage = NUMBER9_PRIVATE_DIR . '/storage';
$rateLimit = check_rate_limit(
    $clientIp,
    $config['security']['rate_limit_max'],
    $config['security']['rate_limit_window'],
    $privateStorage
);

if (!$rateLimit['allowed']) {
    header("Retry-After: {$rateLimit['retry_after']}");
    json_response(429, [
        'success'     => false,
        'message'     => 'Too many submissions. Please wait a few minutes before trying again.',
        'retry_after' => $rateLimit['retry_after'],
    ]);
}

// -------------------------------------------------------------
// 3. INPUT PARSING (JSON or Form-Data)
// -------------------------------------------------------------
$rawInput = file_get_contents('php://input');
$input = [];

if (!empty($rawInput)) {
    $decoded = json_decode($rawInput, true);
    if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
        $input = $decoded;
    }
}

// Fallback to $_POST if submitted as multipart or standard urlencoded
if (empty($input) && !empty($_POST)) {
    $input = $_POST;
}

if (empty($input)) {
    json_response(400, [
        'success' => false,
        'message' => 'Invalid or empty request payload.',
    ]);
}

// -------------------------------------------------------------
// 4. SPAM PREVENTION (Honeypot & Submission Timer)
// -------------------------------------------------------------
// A. Honeypot check: Bots usually fill hidden inputs
$honeypot = isset($input['companyHp']) ? trim((string) $input['companyHp']) : '';
if ($honeypot === '' && isset($input['website_hp'])) {
    $honeypot = trim((string) $input['website_hp']);
}

if ($honeypot !== '') {
    // Silently accept so bots think they succeeded, but do not send email
    json_response(200, [
        'success' => true,
        'message' => 'Thank you! Your message has been received.',
    ]);
}

// B. Timestamp check: Reject if submitted faster than humanly possible (min seconds)
if (isset($input['formTime'])) {
    $formTime = (int) $input['formTime'];
    if ($formTime > 1000000000000) {
        $formTime = (int) ($formTime / 1000);
    }
    $elapsed = time() - $formTime;
    if ($elapsed >= 0 && $elapsed < $config['security']['min_submission_seconds']) {
        json_response(400, [
            'success' => false,
            'message' => 'Form submitted too quickly. Please take a moment and try again.',
        ]);
    }
}

// -------------------------------------------------------------
// 5. SERVER-SIDE VALIDATION & NORMALIZATION
// -------------------------------------------------------------
// Normalizing fields from either Home page or Contact page
$firstName = isset($input['firstName']) ? trim((string) $input['firstName']) : '';
$lastName  = isset($input['lastName']) ? trim((string) $input['lastName']) : '';
$fullNameInput = isset($input['fullName']) ? trim((string) $input['fullName']) : '';

// If fullName is passed (from Contact Page)
if ($firstName === '' && $fullNameInput !== '') {
    $nameParts = preg_split('/\s+/', $fullNameInput, 2);
    $firstName = isset($nameParts[0]) ? $nameParts[0] : '';
    $lastName  = isset($nameParts[1]) ? $nameParts[1] : '';
}

// Email: checks 'email' or 'workEmail'
$email = isset($input['email']) ? trim((string) $input['email']) : '';
if ($email === '' && isset($input['workEmail'])) {
    $email = trim((string) $input['workEmail']);
}

// Phone: checks 'phone' or 'contactNumber'
$phone = isset($input['phone']) ? trim((string) $input['phone']) : '';
if ($phone === '' && isset($input['contactNumber'])) {
    $phone = trim((string) $input['contactNumber']);
}

// Topic / Services: checks 'topic' or 'services'
$topic = isset($input['topic']) ? trim((string) $input['topic']) : '';
$servicesList = [];
if (isset($input['services']) && is_array($input['services'])) {
    $servicesList = array_values(array_filter(array_map('trim', $input['services'])));
}
if ($topic === '' && !empty($servicesList)) {
    $topic = implode(', ', $servicesList);
}
if ($topic === '') {
    $topic = 'Project Discussion';
}

// Company: checks 'companyName' or 'company'
$company = isset($input['companyName']) ? trim((string) $input['companyName']) : '';
if ($company === '' && isset($input['company'])) {
    $company = trim((string) $input['company']);
}

// Message: checks 'message' or 'projectDetails'
$message = isset($input['message']) ? trim((string) $input['message']) : '';
if ($message === '' && isset($input['projectDetails'])) {
    $message = trim((string) $input['projectDetails']);
}

$errors = [];

// Name validation
if ($firstName === '') {
    $errors['fullName'] = 'Full name is required.';
    $errors['firstName'] = 'First name is required.';
} elseif (mb_strlen($firstName) < 2) {
    $errors['fullName'] = 'Full name must be at least 2 characters.';
    $errors['firstName'] = 'First name must be at least 2 characters.';
} elseif (mb_strlen($firstName) > 60) {
    $errors['firstName'] = 'First name cannot exceed 60 characters.';
}

// Email validation
if ($email !== '') {
    if (mb_strlen($email) > 120 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['workEmail'] = 'Please provide a valid email address.';
        $errors['email'] = 'Please provide a valid email address.';
    }
}

// Phone Number validation
if ($phone !== '') {
    if (mb_strlen($phone) < 7 || mb_strlen($phone) > 30) {
        $errors['contactNumber'] = 'Phone number must be between 7 and 30 characters.';
        $errors['phone'] = 'Phone number must be between 7 and 30 characters.';
    } elseif (!preg_match('/^[0-9+\s\-().]{7,30}$/', $phone)) {
        $errors['contactNumber'] = 'Please enter a valid phone number format.';
        $errors['phone'] = 'Please enter a valid phone number format.';
    }
}

// Contact method requirement: at least email or phone must be provided
if ($email === '' && $phone === '') {
    $errors['email'] = 'Please provide either an email or phone number.';
    $errors['workEmail'] = 'Work email is required.';
}

// Topic validation
if ($topic !== '' && mb_strlen($topic) > 200) {
    $errors['topic'] = 'Topic cannot exceed 200 characters.';
}

// Message validation
if ($message === '') {
    $errors['projectDetails'] = 'Project details are required.';
    $errors['message'] = 'Message is required.';
} elseif (mb_strlen($message) < 10) {
    $errors['projectDetails'] = 'Please enter at least 10 characters.';
    $errors['message'] = 'Message must be at least 10 characters.';
} elseif (mb_strlen($message) > 5000) {
    $errors['projectDetails'] = 'Message cannot exceed 5000 characters.';
    $errors['message'] = 'Message cannot exceed 5000 characters.';
}

if (!empty($errors)) {
    json_response(422, [
        'success' => false,
        'message' => 'Please correct the errors in the form and try again.',
        'errors'  => $errors,
    ]);
}

// Sanitized header variables
$cleanFirst   = sanitize_header_string($firstName);
$cleanLast    = sanitize_header_string($lastName);
$cleanFull    = trim("{$cleanFirst} {$cleanLast}");
if ($cleanFull === '') {
    $cleanFull = sanitize_header_string($fullNameInput);
}
$cleanPhone   = sanitize_header_string($phone);
$cleanEmail   = sanitize_header_string($email);
$cleanTopic   = sanitize_header_string($topic);
$cleanCompany = sanitize_header_string($company);

// HTML Safe display variables
$safeFull    = htmlspecialchars($cleanFull, ENT_QUOTES, 'UTF-8');
$safePhone   = htmlspecialchars($cleanPhone, ENT_QUOTES, 'UTF-8');
$safeEmail   = htmlspecialchars($cleanEmail, ENT_QUOTES, 'UTF-8');
$safeTopic   = htmlspecialchars($cleanTopic, ENT_QUOTES, 'UTF-8');
$safeCompany = htmlspecialchars($cleanCompany, ENT_QUOTES, 'UTF-8');
$safeMessage = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));
$currentDate = gmdate('F j, Y, g:i a \U\T\C');

// -------------------------------------------------------------
// 6. COMPOSE & SEND EMAIL VIA PHPMAILER
// -------------------------------------------------------------
$smtp = $config['smtp'];

if (empty($smtp['pass']) && empty(getenv('SMTP_PASS'))) {
    error_log('[Number9 Contact Form] Warning: SMTP_PASS is not configured');
}

$mail = new PHPMailer(true);

try {
    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host       = $smtp['host'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtp['user'];
    $mail->Password   = $smtp['pass'];
    $mail->Port       = $smtp['port'];
    $mail->Timeout    = 15;

    if ($smtp['secure'] === 'tls') {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    } elseif ($smtp['secure'] === 'ssl') {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    } else {
        $mail->SMTPSecure = false;
        $mail->SMTPAutoTLS = false;
    }

    $mail->CharSet = 'UTF-8';

    // From & Recipients
    $mail->setFrom($smtp['from_email'], $smtp['from_name']);
    $mail->addAddress($smtp['recipient'], $smtp['recip_name']);

    if (!empty($cleanEmail)) {
        $mail->addReplyTo($cleanEmail, $cleanFull);
    }

    // Subject
    $mail->Subject = "[Number9 Contact] {$cleanTopic} - {$cleanFull}";

    // HTML Email Body
    $mail->isHTML(true);
    $htmlBody = <<<HTML
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f8; margin: 0; padding: 24px; color: #222; }
  .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
  .header { background: #0e7428; padding: 28px 32px; color: #ffffff; }
  .header h1 { margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.02em; }
  .header p { margin: 6px 0 0; font-size: 14px; opacity: 0.9; }
  .content { padding: 32px; }
  .field-row { margin-bottom: 20px; border-bottom: 1px solid #edf2f7; padding-bottom: 16px; }
  .field-row:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
  .field-label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #718096; margin-bottom: 4px; }
  .field-value { font-size: 16px; color: #1a202c; font-weight: 500; }
  .message-box { background: #f7fafc; border-left: 4px solid #16a20b; padding: 16px; border-radius: 4px; margin-top: 6px; font-size: 15px; line-height: 1.6; color: #2d3748; }
  .footer { background: #f8fafc; padding: 18px 32px; font-size: 12px; color: #a0aec0; border-top: 1px solid #e2e8f0; }
</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Inquiry</h1>
      <p>Submitted via number9.us website</p>
    </div>
    <div class="content">
      <div class="field-row">
        <div class="field-label">Full Name</div>
        <div class="field-value">{$safeFull}</div>
      </div>
HTML;

    if (!empty($safeEmail)) {
        $htmlBody .= <<<HTML
      <div class="field-row">
        <div class="field-label">Work Email</div>
        <div class="field-value"><a href="mailto:{$safeEmail}" style="color: #0e7428; text-decoration: none;">{$safeEmail}</a></div>
      </div>
HTML;
    }

    if (!empty($safePhone)) {
        $htmlBody .= <<<HTML
      <div class="field-row">
        <div class="field-label">Phone Number</div>
        <div class="field-value"><a href="tel:{$safePhone}" style="color: #0e7428; text-decoration: none;">{$safePhone}</a></div>
      </div>
HTML;
    }

    if (!empty($safeCompany)) {
        $htmlBody .= <<<HTML
      <div class="field-row">
        <div class="field-label">Company</div>
        <div class="field-value">{$safeCompany}</div>
      </div>
HTML;
    }

    $htmlBody .= <<<HTML
      <div class="field-row">
        <div class="field-label">Topic / Services</div>
        <div class="field-value" style="color: #0e7428; font-weight: 600;">{$safeTopic}</div>
      </div>
      <div class="field-row">
        <div class="field-label">Project Details / Message</div>
        <div class="message-box">{$safeMessage}</div>
      </div>
    </div>
    <div class="footer">
      Submission Time: {$currentDate} &bull; Client IP: {$clientIp}
    </div>
  </div>
</body>
</html>
HTML;

    $mail->Body = $htmlBody;

    // Plain text alternative body
    $altBody = "New Contact Inquiry - Number9\n\n";
    $altBody .= "Name: {$cleanFull}\n";
    if (!empty($cleanEmail)) {
        $altBody .= "Email: {$cleanEmail}\n";
    }
    if (!empty($cleanPhone)) {
        $altBody .= "Phone: {$cleanPhone}\n";
    }
    if (!empty($cleanCompany)) {
        $altBody .= "Company: {$cleanCompany}\n";
    }
    $altBody .= "Topic/Services: {$cleanTopic}\n";
    $altBody .= "Time: {$currentDate}\n";
    $altBody .= "IP: {$clientIp}\n\n";
    $altBody .= "Message:\n{$message}\n";

    $mail->AltBody = $altBody;

    // Send the email
    $mail->send();

    json_response(200, [
        'success' => true,
        'message' => 'Thank you! Your inquiry has been sent successfully. We will get back to you shortly.',
    ]);

} catch (Exception $e) {
    error_log("[Number9 Contact Form Error] PHPMailer failed: " . $mail->ErrorInfo . " | Exception: " . $e->getMessage());

    json_response(500, [
        'success' => false,
        'message' => 'Unable to send your inquiry right now due to a mail server configuration issue. Please reach out to info@number9.us directly.',
    ]);
}
