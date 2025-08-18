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
if (isset($_SESSION['username'])) {
  header("Location:formlogin.php");
  exit();
}
if (isset($_POST['submit'])) {
  $username=$_POST['username'];
  $password = hash('sha256',$_POST['password']);
  $cpassword = hash('sha256',$_POST['cpassword']);
 if ($password == $cpassword) {
   $sql = "SELECT * FROM login where username='$username'";
   $result = mysqli_query($conn,$sql);

   if ($result->num_rows == 0) {
     $image_path='';
     if (isset ($_FILES["fileToUpload"]) && $_FILES["fileToUpload"]["error"] == 0) {
       $target_file = $target_dir , basename($_FILES["fileToUpload"] ["name"])
     }
     // move to lokal computer imager
         if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"]. $target_file)) {
        $image_path = $target_file
         }  else{
                echo "<script>alert('Sorry there was an errror uploading file!')</script>";
         }
    $sql ="INSERT INTO login (username,password)
      VALUES ('$username','$password')";
    $result = mysqli_query($conn,$sql);

    if ($result) {
                echo "<script>alert('Selamat, pendaftaran berhasil!')</script>";
                $username = "";
                $_POST['password'] = "";
                $_POST['cpassword'] = "";
            } else {
                echo "<script>alert('Maaf, terjadi kesalahan.')</script>";
            }
        } else {
            echo "<script>alert('Ups, username sudah terdaftar.')</script>";
        }
    } else {
        echo "<script>alert('Password tidak sesuai.')</script>";
    }
  }  
?>
    
    <div class="card "  style="width:30rem;">
      <h1 class="text-center mt-1 ">Register</h1>
     <form method="POST" class="ms-3  me-3 ">
  <div class="mb-3 mt-3 ">
  <label for="exampleFormControlInput1" class="form-label">Username</label>
  <input type="text" class="form-control" name="username" id="exampleFormControlInput1" >
</div>
<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Password</label>
<input type="password" class="form-control" name="password" id="exampleFormControlInput1" >

</div>
<div class="mb-3">
        <label for="cpasswordInput" class="form-label">Confirm Password</label>
        <input type="password" class="form-control" name="cpassword" id="cpasswordInput">
    </div>
<button class="btn btn-primary ms-1" name="submit" style="width:27rem;">Create</button>
</form>
 </div>
      </body>
</html>
