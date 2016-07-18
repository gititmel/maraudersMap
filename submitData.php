<?php
include("api/obj/dbcon.php");
$conn = new dbCon();
// Gets data from URL parameters
$lat = $_POST['lat'];
$lng = $_POST['lng'];
$type = $_POST['type'];
//$zip =$_POST['zip'];
$rate =$_POST['rate'];

$conn->handleDemoData($lat, $lng, $type, /*$zip,*/ $rate);
?>
