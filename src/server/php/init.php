<?php
header("Access-Control-Allow-Origin: http://localhost:8080");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT,DELETE');
header("Access-Control-Allow-Credentials: true");
$conn=mysqli_connect(
	"127.0.0.1","root","","meixin",3306);
mysqli_query($conn,"SET NAMES UTF8");