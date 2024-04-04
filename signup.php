<?php
session_start();
if (isset($_POST['submit'])) {
    $fName = $_POST['fName'];
    $username = $_POST['newUsername'];
    $password = $_POST['newPassword'];
    
    $servername = "localhost";
    $usernameDB = "root";
    $passwordDB = "";
    $dbname = "user";
    $conn = new mysqli($servername, $usernameDB, $passwordDB, $dbname);
    
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    $sql = "INSERT INTO users (fName, username, password)
            VALUES ('$fName', '$username', '$password')";
    if ($conn->query($sql) === TRUE) {
        echo '<script>alert("New record created successfully"); window.location.href = "index.html";</script>';
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();
}
?>