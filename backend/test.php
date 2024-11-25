<?php
if (function_exists('sqlsrv_connect')) {
    echo "SQLSRV extension is loaded!";
} else {
    echo "SQLSRV extension is NOT loaded.";
}
?>