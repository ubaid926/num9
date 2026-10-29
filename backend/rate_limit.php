<?php
/**
 * Number9 - Rate Limiter
 * 
 * Simple, robust file-based IP rate limiter with atomic locking.
 * Protects contact form endpoints against spam floods and brute force.
 */

if (!defined('NUMBER9_BACKEND')) {
    define('NUMBER9_BACKEND', true);
}

/**
 * Determine the client IP address safely
 *
 * @return string
 */
function get_client_ip() {
    // Cloudflare connecting IP
    if (!empty($_SERVER['HTTP_CF_CONNECTING_IP'])) {
        $ip = trim($_SERVER['HTTP_CF_CONNECTING_IP']);
        if (filter_var($ip, FILTER_VALIDATE_IP)) {
            return $ip;
        }
    }

    // X-Forwarded-For header (first public IP in chain)
    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $forwarded = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
        foreach ($forwarded as $ip) {
            $ip = trim($ip);
            if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
                return $ip;
            }
        }
    }

    // Standard remote address fallback
    if (!empty($_SERVER['REMOTE_ADDR']) && filter_var($_SERVER['REMOTE_ADDR'], FILTER_VALIDATE_IP)) {
        return $_SERVER['REMOTE_ADDR'];
    }

    return 'unknown';
}

/**
 * Check if the given IP address is within rate limit thresholds
 *
 * @param string $ip
 * @param int $maxRequests
 * @param int $windowSeconds
 * @return array ['allowed' => bool, 'retry_after' => int, 'remaining' => int]
 */
function check_rate_limit($ip, $maxRequests = 5, $windowSeconds = 600) {
    if ($ip === 'unknown') {
        // Allow if IP could not be resolved, but log warning if desired
        return ['allowed' => true, 'retry_after' => 0, 'remaining' => 1];
    }

    $storageDir = __DIR__ . '/storage';
    if (!is_dir($storageDir)) {
        @mkdir($storageDir, 0755, true);
    }

    $filePath = $storageDir . '/rate_limit.json';
    $now = time();
    $cutoff = $now - $windowSeconds;

    // Use a lock file to ensure atomic read-modify-write
    $lockFile = $storageDir . '/rate_limit.lock';
    $lockHandle = @fopen($lockFile, 'c+');

    if ($lockHandle && !flock($lockHandle, LOCK_EX)) {
        // If locking fails, fail open gracefully rather than breaking form
        @fclose($lockHandle);
        return ['allowed' => true, 'retry_after' => 0, 'remaining' => 1];
    }

    $data = [];
    if (file_exists($filePath)) {
        $content = @file_get_contents($filePath);
        if ($content !== false) {
            $decoded = json_decode($content, true);
            if (is_array($decoded)) {
                $data = $decoded;
            }
        }
    }

    // Clean up expired IP records across the board
    foreach ($data as $trackedIp => $timestamps) {
        $filtered = array_values(array_filter($timestamps, function ($ts) use ($cutoff) {
            return $ts > $cutoff;
        }));
        if (empty($filtered)) {
            unset($data[$trackedIp]);
        } else {
            $data[$trackedIp] = $filtered;
        }
    }

    // Check records for this specific IP
    $ipHistory = isset($data[$ip]) ? $data[$ip] : [];
    $ipHistory = array_values(array_filter($ipHistory, function ($ts) use ($cutoff) {
        return $ts > $cutoff;
    }));

    $currentCount = count($ipHistory);

    if ($currentCount >= $maxRequests) {
        // Rate limit exceeded
        $oldestValid = min($ipHistory);
        $retryAfter = max(1, ($oldestValid + $windowSeconds) - $now);

        if ($lockHandle) {
            flock($lockHandle, LOCK_UN);
            fclose($lockHandle);
        }

        return [
            'allowed'     => false,
            'retry_after' => $retryAfter,
            'remaining'   => 0,
        ];
    }

    // Record this request timestamp
    $ipHistory[] = $now;
    $data[$ip] = $ipHistory;

    @file_put_contents($filePath, json_encode($data), LOCK_EX);

    if ($lockHandle) {
        flock($lockHandle, LOCK_UN);
        fclose($lockHandle);
    }

    return [
        'allowed'     => true,
        'retry_after' => 0,
        'remaining'   => max(0, $maxRequests - count($ipHistory)),
    ];
}

