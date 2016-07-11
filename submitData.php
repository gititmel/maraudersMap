<?php


include("api/obj/dbCon.php");
$conn = new dbCon();
// Gets data from URL parameters
$lat = $_POST['lat'];
$lng = $_POST['lng'];
$type = $_POST['type'];
$zip =$_POST['zip'];
echo $lat;
$conn->handleDemoData($lat, $lng, $type, $zip);


?>