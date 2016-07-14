var submitBox, lat, lng, map, marker, infoWindow, pos, zip, ratingValue

$(document).ready(function(){
    setTimeout(function(){
      $.get("https://maps.googleapis.com/maps/api/geocode/json?&latlng="+lat+","+lng).done(function(googleData){

        // console.log(googleData)
      //   console.log(googleData.results)
      //   console.log(googleData.results[0])
      //   console.log(googleData.results[0].address_components)
      //   console.log(googleData.results[0].address_components[7])
      // console.log(googleData.results[0].address_components[7].long_name)

      zip = googleData.results[0].address_components[7].long_name;

      })

    },500)
    
    $.get("api/obj/search.php").done(function(searchResults){
      console.log("SEARCH RESULTS: "+searchResults);
    });

    $("#rate input[type='radio']").click( function(){
      //console.log( $(this) )
      ratingValue = $(this).val()
     //console.log( ratingValue )
    })
      
      
  })

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15
  });

  var geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });

  document.getElementById('address').addEventListener('keyup', function(e) {
    if(e.keyCode==13){
      e.preventDefault()

      geocodeAddress(geocoder, map);}
  });

  function geocodeAddress(geocoder, resultsMap) {

    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function(results, status) {

      if (status === google.maps.GeocoderStatus.OK) {

        resultsMap.setCenter(results[0].geometry.location);

        var addMarker = new google.maps.Marker({
          map     : resultsMap,
          position: results[0].geometry.location
        });
          
          console.log(results[0].geometry.location);
          
          addMarker.setMap(map);

          saveData();
          
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
    } //end geocodeAddress fnc



  submitBox = "<table>" +
                 "<tr><td>Type:</td> <td><select id='type'>" +
                 "<option value='bathroom' SELECTED>Bathroom</option>" +
                 "<option value='toilet'>Toilet</option>" +
                  "<option value='water'>Water fountain</option>" +
                 "</select> </td></tr>" +
                 "<tr><td></td><td><input type='button' value='submit' onclick='saveData()'/></td></tr>";

        // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

    lat = position.coords.latitude;
    lng = position.coords.longitude;

      // infoWindow.setPosition(pos);
      
    map.setCenter(pos);

    marker = new google.maps.Marker({
      map: map,
      position: pos,
      title: "You are here",
      animation: google.maps.Animation.DROP,
    });

    infoWindow = new google.maps.InfoWindow({
      content: submitBox
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

function saveData() {
  var type = document.getElementById("type").value;
  var latlng = pos;
  var rate = ratingValue; 

  $.post("submitData.php",{type: type, lat: pos.lat, lng: pos.lng, zip:zip, rate:rate }).done(function(data){
    console.log(data)
  })

      // var url = "submitData.php?type=" + type + "&lat=" + latlng.lat() + "&lng=" + latlng.lng();
      // downloadUrl(url, function(data, responseCode) {
      //   if (responseCode == 200 && data.length >= 1) {
      //     infowindow.close();
      //     document.getElementById("message").innerHTML = "Location added.";
      //   }
    //  });

    }


// function downloadUrl(url, callback) {
//       var request = window.ActiveXObject ?
//           new ActiveXObject('Microsoft.XMLHTTP') :
//           new XMLHttpRequest;

//       request.onreadystatechange = function() {
//         if (request.readyState == 4) {
//           request.onreadystatechange = doNothing;
//           callback(request.responseText, request.status);
//         }
//       };

//       request.open('POST', url, true);
//       request.send(null);
//     }

//     function doNothing() {}