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

// Get JSON data from request
$data = json_decode(file_get_contents("php://input"), true);

if ($data) {
    $fullName = $conn->real_escape_string($data['fullName']);
    $email = $conn->real_escape_string($data['email']);
    $phone = $conn->real_escape_string($data['phone']);
    $department = $conn->real_escape_string($data['department']);
    $day = $conn->real_escape_string($data['day']);

    // Insert data into database
    $sql = "INSERT INTO appointment (name, email, phone, department, day)
            VALUES ('$fullName', '$email', '$phone', '$department', '$day')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Appointment booked successfully!"]);
    } else {
        echo json_encode(["error" => "Error: " . $sql . "<br>" . $conn->error]);
    }
} else {
    echo json_encode(["error" => "Invalid input."]);
}

$conn->close();

?>