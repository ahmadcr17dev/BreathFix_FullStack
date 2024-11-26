<?php

$servername='localhost';
$database='breathfix';
$username='root';
$password='';

// create connection
$conn = new mysqli($servername, $database, $username, $password);

if($conn->connect_error){
    die('connection failed'. $conn->connect_error);
}else{
    echo 'connection successfull';
}
?>