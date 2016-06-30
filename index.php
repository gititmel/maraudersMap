 <?php 
 session_start();
?>

	
 <!DOCTYPE html>
<html>
  <head>
    <title>Marauder's Map</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
	<link rel="stylesheet" href="css/bootstrap-theme.css">
	<link rel="stylesheet" href="css/custom.css">
	<link rel="stylesheet" href="css/normalize.css">
	<link rel="stylesheet" href="css/font-awesome.min.css">
		

	<script src="js/jquery.2.2.4.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/bootstrap.js"></script>
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
 	 	<div id="map"></div>
 	 </div>

	<div class="row" id="bottomBar">
		
	</div>

 <script type="text/javascript" src="js/mapSubmit.js"></script>
   <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCR0JUJgFB1hzr_L8OLDWceixaGAGUEH2o&callback=initMap">
    </script>
    <script src="js/rating.min.js"></script>
  </body>
</html>




 
