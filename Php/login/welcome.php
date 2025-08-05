<?php
session_start();

if (!isset($_SESSION['username'])) {
    header("Location: formlogin.php");
    exit();
}
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
        <h1 class="display-4 mb-4">Welcome Back,<strong class= "text-primary"> <?php echo ($_SESSION['username']); ?> </strong>!</h1>

        <a href="logout.php" class="btn btn-danger btn-lg">Logout</a>
    </div>

</body>
</html>
