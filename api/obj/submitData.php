<?php
include("dbcon.php");

$conn = new dbCon();

// Gets data from URL parameters
$lat = $_POST['lat'];
$lng = $_POST['lng'];
$type = $_POST['type'];
$rate =$_POST['rate'];

$conn->handleDemoData($lat, $lng, $type, /*$zip,*/ $rate);

// function saveData( $lat, $lng, $type, $rate ){
//    $res = array();
//   // //check is user exists in user table - this returns an array
// $sq = $this->dbCon->pullRecordWithParameters("submitlocation", array("lat"=>$lat /*"lng"=>$lng, "type"=>$type, "rate"=>$rate)*/ ));
//
//   // //if the user exists then send error back UI
//   // //hint: use count() to check the lenght of array */
//   if( count($sq) > 0 ){
//     $res['status'] 	= "error";
//     $res['details'] 	= "Location already exists in database";
//    }else{
//      //if location doesn't exist create record in table
//      $conn->handleDemoData($lat, $lng, $type, /*$zip,*/ $rate);
//    }
//    return $res;
//  }

?>
