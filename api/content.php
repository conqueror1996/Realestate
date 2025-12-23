<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$file = 'content.json';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($file)) {
        header('Content-Type: application/json');
        echo file_get_contents($file);
    } else {
        // Return default structure if file doesn't exist
        echo json_encode(["message" => "No content found"]);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = file_get_contents('php://input');
    if ($data) {
        file_put_contents($file, $data);
        echo json_encode(["success" => true]);
    } else {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "No data provided"]);
    }
}
?>