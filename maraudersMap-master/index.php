<?php 
 session_start();
?>

<!DOCTYPE html>
	<head>
		<meta charset="UTF-8">
		<title> Marauder's Map Boiler Plate </title>
		<link rel="stylesheet" href="css/bootstrap-theme.css">
		<link rel="stylesheet" href="css/normalize.css">		
		<link rel="stylesheet" href="css/font-awesome.min.css">
		<link rel="stylesheet" href="css/custom.css">
	
	<script src="js/jquery.2.2.4.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/bootstrap.js"></script>
	<script src="js/mapSubmit.js"></script>
	</head>

<body>
	<div class="row" id="topBar">
		
		<form class="form-search">
			<div class="input-append">
		    	<input type="text" class="span2 search-query">
		    	<button type="submit" class="btn">Search</button>	
		    	<i class="fa fa-search" aria-hidden="true"></i>
	  		</div>
		</form> 
	</div>

	<div class="row" id="centerBar">
		<div id="map">		
			
			<div id="out"></div>
		</div>	
		
	</div>

	<div class="row" id="bottomBar">
		<input type="button" value="Show my location" onclick="geoFindMe()">
	</div>

	

 <script type="text/javascript" src="js/mapSubmit.js"></script>
 <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCR0JUJgFB1hzr_L8OLDWceixaGAGUEH2o&v=3&callback=initMap"
    async defer></script> 	
</body>
</html>

<!--search HTML5 geolocation API -->