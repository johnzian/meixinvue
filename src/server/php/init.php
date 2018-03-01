<?php
header('Access-Control-Allow-Origin:http://www.johnzian.cn');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT,DELETE');
header("Access-Control-Allow-Credentials: true");
$conn=mysqli_connect(
	"qdm225205620.my3w.com","qdm225205620","63cd0163","qdm225205620_db",3306);
mysqli_query($conn,"SET NAMES UTF8");