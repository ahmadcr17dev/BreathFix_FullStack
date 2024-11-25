<?php
$serverName = "DESKTOP-2R81LML\SQLEXPRESS";
$connectionOptions = [
    "Database" => "BreathFix",
    "Uid" => "",
    "PWD" => ""
];
$conn = sqlsrv_connect($serverName, $connectionOptions);
if (!$conn) {
    die(print_r(sqlsrv_errors(), true));
} else {
    echo "Connected successfully!";
}
?>