<?php  
$server = "127.0.0.1";
$username = "root";
$password = "";
$database = "register";
$conn = mysqli_connect($server,$username,$password,$database);
if (!$conn) {
  echo("cant connect . mysqli_connect_error()");
}
else {
  echo("connect succsefully");
}









?>
