<?php

// path of connection file from database folder
include('../database/connect.php');

// get data from request
$data = json_decode(file_get_contents("php://input"),true);

if($data){
    $username = $data["username"];
    $email = $data["email"];
    $password = $data["password"];

    $sql_query = "INSERT INTO users(username, email, password) VALUES('$username', '$email', '$password')";
    if($conn->query($sql_query) === true){
        echo json_encode(["message" => "User Registered Successfully"]);
    } else{
        echo json_encode(["error" => "error".$conn->error]);
    }
}
$conn->close();

?>