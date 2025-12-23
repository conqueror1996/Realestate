<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$file = 'password.json';
$data = json_decode(file_get_contents('php://input'), true);

$currentPassword = $data['currentPassword'] ?? '';
$newPassword = $data['newPassword'] ?? '';

if (!$currentPassword || !$newPassword) {
    echo json_encode(["success" => false, "message" => "Missing fields"]);
    exit();
}

if (!file_exists($file)) {
    echo json_encode(["success" => false, "message" => "Password file not found"]);
    exit();
}

$storedData = json_decode(file_get_contents($file), true);
$storedHash = $storedData['hash'];

if (password_verify($currentPassword, $storedHash)) {
    // Save new password
    $newHash = password_hash($newPassword, PASSWORD_DEFAULT);
    file_put_contents($file, json_encode(['hash' => $newHash]));
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Incorrect current password"]);
}
?>