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
    header("Location: formlogin.php");
    exit();
}

if (isset($_POST['submit'])) {
    $username   = $_POST['username'];
    $password   = hash('sha256', $_POST['password']);
    $cpassword  = hash('sha256', $_POST['cpassword']);

    if ($password !== $cpassword) {
        echo "<script>alert('Password tidak sesuai.')</script>";
        exit;
    }

    // Cek apakah username sudah ada
    $sql = "SELECT * FROM login WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo "<script>alert('Ups, username sudah terdaftar.')</script>";
    } else {
        // Default image_path
        $image_path = "";

        // Cek kalau ada file yang diupload
        if (isset($_FILES['fileToUpload']) && $_FILES['fileToUpload']['error'] === 0) {
            $target_dir  = "uploads/";
            if (!is_dir($target_dir)) {
                mkdir($target_dir, 0777, true); // bikin folder kalau belum ada
            }

            $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);

            if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
                $image_path = $target_file;
            } else {
                echo "<script>alert('Sorry, gagal upload file!')</script>";
            }
        }

        // Insert ke database
        $sql = "INSERT INTO login (username, password, image) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sss", $username, $password, $image_path);
        $insert = $stmt->execute();

        if ($insert) {
            echo "<script>alert('Selamat, pendaftaran berhasil!')</script>";
            $_POST['username'] = "";
            $_POST['password'] = "";
            $_POST['cpassword'] = "";
        } else {
            echo "<script>alert('Maaf, terjadi kesalahan.')</script>";
        }
    }
}
?>

    
    <div class="card "  style="width:30rem;">
      <h1 class="text-center mt-1 ">Register</h1>
     <form method="POST" class="ms-3  me-3 " enctype="multipart/form-data">
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
<label for="fileToUpload">Profile Image:</label>
    <input type="file" name="fileToUpload" id="fileToUpload">
    
<button class="btn btn-primary ms-1" name="submit" style="width:27rem;">Create</button>
</form>
 </div>
      </body>
</html>
