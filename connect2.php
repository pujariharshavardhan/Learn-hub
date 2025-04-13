<?php
$name =$_POST['name'];
$email =$_POST['email'];
//data base connection

$conn = new mysqli('localhost','root','','hello2');
if($conn->connect_error)
{
    die('connection failed:'.$conn->connect_error);
}else{
    $stmt=$conn->prepare("insert into harsha(name,email)values(?,?)");
    $stmt->bind_param("ss",$name,$email);
    $stmt->execute();
    echo "success";
    $stmt->close();
    $conn->close();
}

?>