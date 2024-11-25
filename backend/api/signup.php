<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// include 'connect.php'; // Include your database connection file
include('connect.php');  // Use relative path to go back one level to the 'backend' folder

$data = json_decode(file_get_contents("php://input"), true);

$username = $data['username'];
$email = $data['email'];
$password = password_hash($data['password'], PASSWORD_BCRYPT);

if (!$username || !$email || !$password) {
    echo json_encode(["message" => "All fields are required."]);
    exit();
}

// Check if email already exists
$query = "SELECT * FROM Users WHERE Email = ?";
$params = [$email];
$stmt = sqlsrv_query($conn, $query, $params);

if ($stmt && sqlsrv_fetch_array($stmt)) {
    echo json_encode(["message" => "Email is already registered."]);
    exit();
}

// Insert new user
$query = "INSERT INTO Users (Username, Email, Password) VALUES (?, ?, ?)";
$params = [$username, $email, $password];
$stmt = sqlsrv_query($conn, $query, $params);

if ($stmt) {
    echo json_encode(["message" => "User registered successfully!"]);
} else {
    echo json_encode(["message" => "Registration failed. Please try again."]);
}
?>