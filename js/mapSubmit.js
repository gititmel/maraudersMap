function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 15
    });

        // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
      };

    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

     var infoWindow = new google.maps.InfoWindow({
        map: map,
        content: 'Location found: ' + lat +" , "+ lng,
      });

      // infoWindow.setPosition(pos);
      
      map.setCenter(pos);

    var marker = new google.maps.Marker({
      map: map,
      position: pos,
      title: "You are here",
      animation: google.maps.Animation.DROP,
    });

      marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });
            console.log(pos);
    },

          function() {
            handleLocationError(true,infoWindow, map.getCenter());
          });
  } 

        else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }