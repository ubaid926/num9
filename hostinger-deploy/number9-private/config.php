<?php
/**
 * Number9 - Backend Configuration & Environment Loader
 * 
 * Safely loads environment variables from .env files or host environment
 * and provides sanitized configuration values.
 */

if (!defined('NUMBER9_BACKEND')) {
    define('NUMBER9_BACKEND', true);
}

/**
 * Parse a .env file and populate environment variables
 *
 * @param string $filePath
 * @return bool
 */
function load_env_file($filePath) {
    if (!file_exists($filePath) || !is_readable($filePath)) {
        return false;
    }

    $lines = file($filePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if ($lines === false) {
        return false;
    }

    foreach ($lines as $line) {
        $line = trim($line);
        // Skip comments and empty lines
        if ($line === '' || strpos($line, '#') === 0) {
            continue;
        }

        // Split on the first '='
        $parts = explode('=', $line, 2);
        if (count($parts) !== 2) {
            continue;
        }

        $key = trim($parts[0]);
        $value = trim($parts[1]);

        // Remove surrounding quotes if present
        if (
            (substr($value, 0, 1) === '"' && substr($value, -1) === '"') ||
            (substr($value, 0, 1) === "'" && substr($value, -1) === "'")
        ) {
            $value = substr($value, 1, -1);
        }

        // Don't overwrite existing environment variables set by host
        if (getenv($key) === false) {
            putenv("{$key}={$value}");
            $_ENV[$key] = $value;
            $_SERVER[$key] = $value;
        }
    }

    return true;
}

// Search for .env file in standard locations
// 1. Current private directory: number9-private/.env
// 2. User home directory: /home/uXXXX/.env (one level above)
// 3. Current working directory fallback
$envLocations = [
    __DIR__ . '/.env',
    dirname(__DIR__) . '/.env',
    dirname(__DIR__) . '/number9-private/.env',
];

foreach ($envLocations as $envPath) {
    if (file_exists($envPath)) {
        load_env_file($envPath);
        break;
    }
}

/**
 * Retrieve configuration value with fallback
 *
 * @param string $key
 * @param mixed $default
 * @return mixed
 */
function get_config($key, $default = null) {
    $val = getenv($key);
    if ($val !== false && $val !== '') {
        return $val;
    }
    if (isset($_ENV[$key]) && $_ENV[$key] !== '') {
        return $_ENV[$key];
    }
    if (isset($_SERVER[$key]) && $_SERVER[$key] !== '') {
        return $_SERVER[$key];
    }
    return $default;
}

/**
 * Return normalized SMTP and application configuration array
 *
 * @return array
 */
function get_app_config() {
    $port = (int) get_config('SMTP_PORT', 465);
    $defaultSecure = ($port === 587) ? 'tls' : 'ssl';

    $origins = get_config(
        'ALLOWED_ORIGINS',
        'https://number9.us,https://www.number9.us,http://localhost:5173,http://127.0.0.1:5173,http://localhost:3000'
    );
    $allowedOrigins = array_values(array_filter(array_map('trim', explode(',', (string) $origins))));

    return [
        'smtp' => [
            'host'       => (string) get_config('SMTP_HOST', 'smtp.hostinger.com'),
            'port'       => $port,
            'secure'     => strtolower((string) get_config('SMTP_SECURE', $defaultSecure)),
            'user'       => (string) get_config('SMTP_USER', 'info@number9.us'),
            'pass'       => (string) get_config('SMTP_PASS', ''),
            'from_email' => (string) get_config('SMTP_FROM_EMAIL', get_config('SMTP_USER', 'info@number9.us')),
            'from_name'  => (string) get_config('SMTP_FROM_NAME', 'Number9 Website Contact Form'),
            'recipient'  => (string) get_config('RECIPIENT_EMAIL', 'info@number9.us'),
            'recip_name' => (string) get_config('RECIPIENT_NAME', 'Number9 Team'),
        ],
        'security' => [
            'allowed_origins'         => $allowedOrigins,
            'rate_limit_max'          => (int) get_config('RATE_LIMIT_MAX_REQUESTS', 5),
            'rate_limit_window'       => (int) get_config('RATE_LIMIT_WINDOW_SECONDS', 600), // 10 minutes
            'min_submission_seconds'  => (int) get_config('MIN_SUBMISSION_TIME_SECONDS', 2),
        ],
    ];
}

