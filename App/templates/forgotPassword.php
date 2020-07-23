<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>LOGIN</title>

    <!-- Font Icon -->
    <link rel="stylesheet" href="static/registerLogin/fonts/material-icon/css/material-design-iconic-font.min.css">

    <!-- Main css -->
    <link rel="stylesheet" href="static/registerLogin/css/style.css">
    <?php
        session_start();
    ?>
</head>
<body>
<div class="main">
        <section class="signup">
            <!-- <img src="static/registerLogin/images/signup-bg.jpg" alt=""> -->
            <div class="container">
                <div class="signup-content">
                    <form method="POST" id="signup-form" class="signup-form" action="forgotPassword.php">
                        <h2 class="form-title">Login</h2>
                        <div class="form-group">
                            <input type="email" class="form-input" name="email" id="email" placeholder="Email"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-input" name="password1" id="password1" placeholder="Password"/>
                            <span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-input" name="password2" id="password2" placeholder="Repeat your password"/>
                        </div>
                        <div class="form-group">
                            <input type="submit" name="register_btn" id="register_btn" class="form-submit" value="Login"/>
                        </div>
                    </form>
                    
<?php
include 'connection.php';
$conn = OpenCon();
echo "Connected Successfully";
if (isset($_POST['register_btn'])) {
    
    
     $password1= $_POST['password1'] ;   
    $email= $_POST['email'] ;   
    
    $sql= "SELECT * FROM user WHERE email='$email'";
    $result = mysqli_query($conn, $sql) or trigger_error(mysqli_error($conn));
    
    $row = $result->fetch_assoc();
    if(empty($row)){
        echo "<br>Email ID is incorrect";
    }
    else{
    $username = $row["username"];
    $match = $row["password"];
    if($match==md5($password1)){
        $_SESSION['username']=$username;
        $_SESSION['message'] = "Logged in successfully";
        header("location: index.php");
    }
    else{
        echo "Incorrect password";
    }
}
}
CloseCon($conn);
?>
<br><br>

                     <a href="forgotPassword.php" class="loginhere-link">Forgot Password?</a>
                </div>
            </div>
        </section>

    </div>

    <!-- JS -->
    <script src="static/registerLogin/vendor/jquery/jquery.min.js"></script>
    <script src="static/registerLogin/js/main.js"></script>

</body>
</html>
