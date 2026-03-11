<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid data']);
    exit;
}

$to = 'info@abz-zaun.de';
$subject = 'Neue Anfrage über abz-zaun.de';

$name = htmlspecialchars($data['firstName'] ?? '') . ' ' . htmlspecialchars($data['lastName'] ?? '');
$email = filter_var($data['email'] ?? '', FILTER_VALIDATE_EMAIL);
$phone = htmlspecialchars($data['phone'] ?? '');
$categories = implode(', ', array_map('htmlspecialchars', $data['categories'] ?? []));
$length = htmlspecialchars($data['length'] ?? '');
$height = htmlspecialchars($data['height'] ?? '');
$installation = htmlspecialchars($data['installation'] ?? '');
$address = htmlspecialchars(($data['street'] ?? '') . ', ' . ($data['city'] ?? ''));
$message = htmlspecialchars($data['message'] ?? '');
$details = htmlspecialchars($data['details'] ?? '');

if (!$email) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email']);
    exit;
}

$body = "Neue Anfrage von der Website\n";
$body .= "==============================\n\n";
$body .= "Name: $name\n";
$body .= "E-Mail: $email\n";
$body .= "Telefon: $phone\n";
$body .= "Adresse: $address\n\n";
$body .= "Produkte: $categories\n";
$body .= "Länge: $length\n";
$body .= "Höhe: $height\n";
$body .= "Montage: $installation\n\n";
$body .= "Zusätzliche Details: $details\n";
$body .= "Nachricht: $message\n";

$headers = "From: noreply@abz-zaun.de\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}
