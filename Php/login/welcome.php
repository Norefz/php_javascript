<?php
session_start();
include('conect.php');
if (!isset($_SESSION['username'])) {
    header("Location: formlogin.php");
    exit();
}

$username = $_SESSION['username'];

// Ambil data user dari database
$sql = "SELECT image FROM login WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

$image_path = !empty($user['image']) ? $user['image'] : "uploads/default.png";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" xintegrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous">
</head>
<body class="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-white">

    <div class="text-center">
  <img src="<?php echo htmlspecialchars($image_path); ?>" 
         alt="Profile Picture" 
         class="rounded-circle mb-4"
         style="width: 150px; height: 150px; object-fit: cover; border:2px solid;">

    <br>
        <h1 class="display-4 mb-4">Welcome Back,<strong class= "text-primary"> <?php echo ($_SESSION['username']); ?> </strong>!</h1>

        <a href="logout.php" class="btn btn-danger btn-lg">Logout</a>
    </div>

</body>
</html>
