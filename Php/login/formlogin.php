<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Form Login Php</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous"> 

    <style>
      body{
        background-imae:url()
      }
      .form-control{
        
      }
    a{
  position:relative;
  left:11.9rem;
text-decoration:none;
margin-top:12px;
}
    </style>
    <link href="css/style.css" rel="stylesheet">
  </head>
  <body class= "  min-vh-100  align-items-center d-flex justify-content-center bg-dark">
<?php
include('conect.php');
session_start();

if (isset($_POST['submit'])) {
  $username = $_POST['username'];
  $password = hash('sha256', $_POST['password']);
$sql = "SELECT * FROM  login where username ='$username' AND password ='$password'";
$result = mysqli_query($conn,$sql);
if ($result ->num_rows >0) {
  $row = mysqli_fetch_assoc($result);
  $_SESSION['username'] = $row['username'];
  header("Location: welcome.php");
  exit();
  
}
else {
        echo "<script>alert('passowrd or username is wrong.')</script>";
}
}



?>
    
    <div class="card "  style="width:30rem;" >
      <h1 class="text-center mt-1 ">Login</h1>
     <form method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" class="ms-3  me-3 ">
  <div class="mb-3 mt-3 ">
  <label for="exampleFormControlInput1" class="form-label">Username</label>
  <input type="text" class="form-control" name="username" id="exampleFormControlInput1" >
</div>
<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Password</label>
<input type="password" name="password"class="form-control" id="exampleFormControlInput1" >
</div>

<button name="submit" class="btn btn-primary ms-1" style="width:27rem;">LOGIN</button>
<a class="text-primary  text-center" href=" register.php">Register</a>
</form>
 </div>
      </body>
</html>
