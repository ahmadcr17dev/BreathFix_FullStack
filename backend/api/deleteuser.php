<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Enable CORS and allow JSON requests
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Respond to preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Include the database connection file
include('../database/connect.php');

// Decode JSON payload
$data = json_decode(file_get_contents('php://input'), true);
$username = isset($data['username']) ? $data['username'] : null;

// Check if username is provided
if ($username) {
    $sqlquery = 'DELETE FROM users WHERE username = ?';
    $stmt = $conn->prepare($sqlquery);

    if ($stmt) {
        // Bind the parameter as a string
        $stmt->bind_param('s', $username);

        if ($stmt->execute()) {
            echo json_encode(["status" => "success", "message" => "User deleted successfully"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Failed to delete user"]);
        }

        $stmt->close();
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to prepare the statement"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid username"]);
}

$conn->close();
