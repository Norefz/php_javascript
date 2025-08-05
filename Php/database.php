<?php
$servername= "127.0.0.1";
$username = "root";
$password = "";
$database = "register";
$connection = mysqli_connect($servername,$username,$password);
if($connection->connect_error){
            die("Connection failed" . $connection->connect_error);
        }
?>
