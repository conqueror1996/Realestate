<?php
// Change password API endpoint
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!isset($data['currentPassword']) || !isset($data['newPassword'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Missing required fields']);
    exit();
}

$currentPassword = $data['currentPassword'];
$newPassword = $data['newPassword'];

// Path to the password file
$passwordFile = __DIR__ . '/../.admin_password';

// Check if password file exists, if not create with default
if (!file_exists($passwordFile)) {
    file_put_contents($passwordFile, password_hash('admin@2025', PASSWORD_DEFAULT));
}

// Read current hashed password
$storedHash = file_get_contents($passwordFile);

// Verify current password
if (!password_verify($currentPassword, $storedHash)) {
    http_response_code(401);
    echo json_encode(['success' => false, 'message' => 'Current password is incorrect']);
    exit();
}

// Validate new password
if (strlen($newPassword) < 8) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'New password must be at least 8 characters']);
    exit();
}

// Hash and save new password
$newHash = password_hash($newPassword, PASSWORD_DEFAULT);
if (file_put_contents($passwordFile, $newHash) === false) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to save new password']);
    exit();
}

echo json_encode([
    'success' => true,
    'message' => 'Password changed successfully'
]);
