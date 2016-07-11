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
	<script src="js/custom.js"></script>
 </head>
 
  <body>
 
 	 <div class="container-fluid">
 	 	<div class ="row" id="topBar">
 	 		<div class="col-md-8" id="title">
	 	 		<h2>the MAP</h2>
 	 		</div>
 	 		<div class="col-md-4" id="searchBar">
 	 			<form class="form-search">
 	 				<div class="input-append">
		    	<input id="address" type="text">
		    	<input id ="submit" type="button" class="btn" value="Go!">
		    	<i class="fa fa-search" aria-hidden="true"></i>
					<!-- <div class="input-append">
				    	<i class="fa fa-compass" aria-hidden="true"></i>
				    	<input type="text" class="span2 search-query">
				    	<button type="submit" class="btn">Go!</button>	
				    	<i class="fa fa-search" aria-hidden="true"></i>
			  		</div> -->
				</form>
 	 		</div>
 	 	</div>
 	 	
 	 
	</div>

 	 <div class="row" id="centerBar">
 	 	<div id="map"></div>
 	 </div>

	<div class="row">
			<div class="col-md-6" id="about-page">
			<h2 id="click-about">about</h2>
<!-- 			<span id="click-close">X</span>
 -->		</div>
		<div class="col-md-6" id="submit-form">
			<h2 id="click-submit">submit</h2>
			<span id="click-close">X</span>
		</div>
	</div>

 <script type="text/javascript" src="js/mapSubmit.js"></script>
   <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCR0JUJgFB1hzr_L8OLDWceixaGAGUEH2o&callback=initMap">
    </script>
    <script src="js/rating.min.js"></script>
  </body>
</html>




 
