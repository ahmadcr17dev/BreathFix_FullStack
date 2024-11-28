<?php

// Enable CORS and allow JSON requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Respond to preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Include the database connection file
include('../database/connect.php');

// Decode the incoming JSON request
$data = json_decode(file_get_contents('php://input'), true);

if ($data) {
    $name = $data['name'];
    $email = $data['email'];
    $gender = $data['gender'];
    $description = $data['description'];

    if (empty($name) || empty($email) || empty($gender) || empty($description)) {
        echo json_encode(["statuus" => "error", "message" => "All fields are required"]);
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "error", "message" => "Invalid Email Format"]);
    }

    try {
        $sqlquery = 'INSERT INTO contactform(name, email, gender, description) VALUES(?,?,?,?)';
        $stmt = $conn->prepare($sqlquery);
        $stmt->bind_param("ssss", $name, $email, $gender, $description);
        if ($stmt->execute()) {
            echo json_encode(["status" => "success", "message" => "Form submitted successfully"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Failed to submit form"]);
        }
    } catch (Exception $e) {
        echo json_encode(["status" => "error", "message" => "Error: " . $e->getMessage()]);
    }
    $stmt->close();
}
$conn->close();
