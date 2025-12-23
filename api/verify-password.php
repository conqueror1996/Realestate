<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$file = 'password.json';

// Default password hash (password: "admin123")
// You can generate a new one using password_hash("your_password", PASSWORD_DEFAULT)
if (!file_exists($file)) {
    $defaultHash = '$2y$10$YourGeneratedHashHere'; // Placeholder
    // Actually let's use a real hash for "admin123" for initial setup
    // $2y$10$vI8aWBnW3fID.ZQ4/zo1G.q1lRps.9cGLcZEiGDMVr5yUP1KUOYTa
    file_put_contents($file, json_encode(['hash' => '$2y$10$vI8aWBnW3fID.ZQ4/zo1G.q1lRps.9cGLcZEiGDMVr5yUP1KUOYTa']));
}

$data = json_decode(file_get_contents('php://input'), true);
$password = $data['password'] ?? '';

$storedData = json_decode(file_get_contents($file), true);
$storedHash = $storedData['hash'];

if (password_verify($password, $storedHash)) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(401);
    echo json_encode(["success" => false, "message" => "Invalid password"]);
}
?>