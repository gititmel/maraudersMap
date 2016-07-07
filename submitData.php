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

// DO THIS: add SQL statment insert into.. etc 


// // Opens a connection to a MySQL server
// $connection=mysql_connect ("localhost", $username, $password);
// if (!$connection) {
//   die('Not connected : ' . mysql_error());
// }

// // Set the active MySQL database
// $db_selected = mysql_select_db($database, $connection);
// if (!$db_selected) {
//   die ('Can\'t use db : ' . mysql_error());
// }

// // Insert new row with user data
// $query = sprintf("INSERT INTO markers " .
//          " (id, name, address, lat, lng, type ) " .
//          " VALUES (NULL, '%s', '%s', '%s', '%s', '%s');",
//          mysql_real_escape_string($lat),
//          mysql_real_escape_string($lng),
//          mysql_real_escape_string($type));

// $result = mysql_query($query);

// if (!$result) {
//   die('Invalid query: ' . mysql_error());
// }

?>