<?php
// Verify password API endpoint
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

if (!isset($data['password'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Password required']);
    exit();
}

$password = $data['password'];

// Path to the password file
$passwordFile = __DIR__ . '/../.admin_password';

// Check if password file exists, if not create with default
if (!file_exists($passwordFile)) {
    // Default password: admin@2025
    file_put_contents($passwordFile, password_hash('admin@2025', PASSWORD_DEFAULT));
}

// Read stored hashed password
$storedHash = file_get_contents($passwordFile);

// Verify password
if (password_verify($password, $storedHash)) {
    echo json_encode(['success' => true, 'message' => 'Login successful']);
} else {
    http_response_code(401);
    echo json_encode(['success' => false, 'message' => 'Invalid password']);
}
