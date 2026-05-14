<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$recaptchaSecret = getenv('RECAPTCHA_SECRET') ?: 'PASTE_RECAPTCHA_SECRET_KEY_HERE';
$to = 'info@anastanveer.com';
$from = 'info@anastanveer.com';

function fail_response(string $message, int $code = 400): void
{
    http_response_code($code);
    echo json_encode(['success' => false, 'message' => $message]);
    exit;
}

function field_value(string $key, int $maxLength = 2000): string
{
    $value = trim((string)($_POST[$key] ?? ''));
    $value = str_replace(["\r", "\n"], ' ', $value);
    return substr($value, 0, $maxLength);
}

if (trim((string)($_POST['_honey'] ?? '')) !== '') {
    fail_response('Spam blocked');
}

$name = field_value('name', 120);
$email = field_value('email', 180);
$phone = field_value('phone', 80);
$projectType = field_value('projectType', 120);
$budget = field_value('budget', 80);
$message = trim((string)($_POST['message'] ?? ''));
$message = substr($message, 0, 5000);
$token = trim((string)($_POST['recaptchaToken'] ?? ''));
$source = field_value('source', 120);
$timestamp = field_value('timestamp', 120);

if ($name === '' || $email === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    fail_response('Invalid form data');
}

if ($token === '' || $recaptchaSecret === 'PASTE_RECAPTCHA_SECRET_KEY_HERE') {
    fail_response('reCAPTCHA is not configured');
}

$verifyPayload = http_build_query([
    'secret' => $recaptchaSecret,
    'response' => $token,
    'remoteip' => $_SERVER['REMOTE_ADDR'] ?? ''
]);

$verifyContext = stream_context_create([
    'http' => [
        'method' => 'POST',
        'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
        'content' => $verifyPayload,
        'timeout' => 8
    ]
]);

$verifyRaw = @file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $verifyContext);
$verify = is_string($verifyRaw) ? json_decode($verifyRaw, true) : null;

if (
    !is_array($verify) ||
    empty($verify['success']) ||
    (($verify['score'] ?? 0) < 0.5) ||
    (($verify['action'] ?? '') !== 'contact_form')
) {
    fail_response('reCAPTCHA verification failed');
}

$safeMessage = trim(strip_tags($message));
$subject = 'New Project Inquiry - anastanveer.com';
$body = implode("\n", [
    'New project inquiry from anastanveer.com',
    '',
    'Name: ' . $name,
    'Email: ' . $email,
    'Phone / WhatsApp: ' . ($phone ?: 'Not provided'),
    'Project Type: ' . ($projectType ?: 'Not selected'),
    'Budget: ' . ($budget ?: 'Not selected'),
    'Source: ' . ($source ?: 'Website'),
    'Submitted At: ' . ($timestamp ?: date('Y-m-d H:i:s')),
    'IP: ' . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown'),
    '',
    'Project Details:',
    $safeMessage
]);

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Anas Tanveer Website <' . $from . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion()
];

if (!mail($to, $subject, $body, implode("\r\n", $headers))) {
    fail_response('Email could not be sent', 500);
}

echo json_encode(['success' => true]);
