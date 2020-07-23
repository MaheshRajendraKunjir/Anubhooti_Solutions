<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>home</title>
</head>
<body>
    <?php
        session_unset();
        session_start();
        #$user = $_SESSION['username'];
        #echo "<h1> Hello $user </h1>";
    
    ?>
    <ul type= "none">
        <li>Home</li>
        <?php
            if (empty($_SESSION['username'])) {
                echo "<li>Login</li>";
                echo "<li>Register</li>";
            }
        ?>
        <li>Products</li>
        <?php
            if (!empty($_SESSION['username'])) {
                echo "<li><a href ='logout.php'>Logout</li>";
            }
        ?>
    </ul>    
</body>
</html>