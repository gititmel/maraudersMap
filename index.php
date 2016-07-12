
 <!DOCTYPE html>
<html>
  <head>
    <title>Marauder's Map</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
	<link rel="stylesheet" href="css/custom.css">

	<link rel="stylesheet" href="css/bootstrap-theme.css">
	<link rel="stylesheet" href="css/normalize.css">
	<link rel="stylesheet" href="css/font-awesome.min.css">
		
	<script src="js/jquery.2.2.4.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/bootstrap.js"></script>
	<script src="js/custom.js"></script>


	<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
 </head>
 
  <body>
 
 	 <div class="container-fluid">
 	 	<div class ="row" id="topBar">
 	 		<div class="col-md-8" id="title">
	 	 		<h1>the MAP</h1>
 	 		</div>
 	 		<div class="col-md-4" id="searchBar">
 	 			<form class="form-search">
 	 				<div class="input-append">
<!-- 		    	<input id="address" type="text">
 -->		    	<input id ="submit" type="button" class="btn" value="Go!">
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
			<span id="click-close-ab">X</span>
		</div>
		
		<div class="col-md-6" id="submit-page">
			<h2 id="click-submit">submit</h2>
			<span id="click-close-sub">X</span>

			<form class="form-horizontal">
				<div class="form-group">
					<label for="address" class="col-sm-2 control-label">Location</label>
					<div class="col-sm-6">
						<input type="text" class="form-control" id="address" placeholder="Enter Location">
					</div>
				</div>		

				<div class="form-group">
					<label for="type" class="col-sm-2 control-label">Type</label>
					
					<div class="col-sm-6">
					<div class="dropdown">
						<button class="btn btn-default dropdown-toggle" type="button" id="type" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
						This is a...
						<span class="caret"></span>
						</button>						

						<ul class="dropdown-menu" aria-labelledby="type">
							<li>Bathroom</li>
		    				<li>Toilet</li>
		    				<li>Water Fountain</li>
		    				<li>Spray Shower</li>
					   	</ul>
					 </div>
					</div>
				</div>

				<div class="form-group">
				 <label for="rate" class="col-sm-2 control-label">Rating</label>
					<div class="col-sm-6">
					<fieldset class="rating">
				    <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="Pretty good">4 stars</label>
				    <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="Meh">3 stars</label>
				    <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="Kinda bad">2 stars</label>
				    <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="Sucks big time">1 star</label>
				    </fieldset>
				  </div>
				</div>
			</form>
		
		</div>
		
		</div>
	</div>

 <script type="text/javascript" src="js/mapSubmit.js"></script>
   <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCR0JUJgFB1hzr_L8OLDWceixaGAGUEH2o&callback=initMap">
    </script>
    <script src="js/rating.min.js"></script>
  </body>
</html>




 
