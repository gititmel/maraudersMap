var submitbox, lat, lng, map, marker, infoWindow, pos, ratingValue, newLat, newLng


//JQUERY LINKING:
$(document).ready(function(){
    setTimeout(function(){
      $.get("https://maps.googleapis.com/maps/api/geocode/json?&latlng="+newLat+","+newLng).done(function(googleData){
      })
    },500)

    $.get("api/obj/search.php").done(function(searchResults){
    //  console.log("SEARCH RESULTS: "+searchResults);
    });

    $("#rate input[type='radio']").click( function(){
      //console.log( $(this) )
      ratingValue = $(this).val()
     //console.log( ratingValue )
    });
})

//JQUERY LINK ENDS

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15
  });

  var geocoder = new google.maps.Geocoder();

  var input = /** @type {!HTMLInputElement} */(
            document.getElementById('address'));

  var autocomplete = new google.maps.places.Autocomplete(input);
          autocomplete.bindTo('bounds', map);

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

    geocoder.geocode({'address': address}, function(results, status){

      if (status === google.maps.GeocoderStatus.OK && document.getElementById("type").value !== " ") {

        resultsMap.setCenter(results[0].geometry.location);

        newLat = results[0].geometry.location.lat();
        newLng = results[0].geometry.location.lng();

        console.log("NEW POSITION: "+newLat+newLng);

        var addressMarker = new google.maps.Marker({
          map     : resultsMap,
          position: results[0].geometry.location
        });

        addressMarker.setMap(map);
        saveData();

 console.log(results[0].geometry.location);
      } else {
        if (document.getElementById("type").value === " "){
          alert('enter a type');
      }else{
        alert('Geocode was not successful for the following reason: ' + status);
      }
    }
        });
  } //<--- END geocodeAddress fnc
// save location data from info window:

  //submitBox = "You're here!<br><button type='button' id='submitbox'>save this location</button>";
  // submitBox.addListener('click', function() {
  //   geocodeAddress(geocoder, map);
  // });


        // Try HTML5 geolocation.
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

    lat = position.coords.latitude;
    lng = position.coords.longitude;

    map.setCenter(pos);

    currentPosMarker = new google.maps.Marker({
      map: map,
      position: pos,
      animation: google.maps.Animation.DROP,
    });

    infoWindow = new google.maps.InfoWindow({
      content: "you're here!",
    });

      currentPosMarker.addListener('mouseover', function() {
      infoWindow.open(map, currentMarker);
    });
// infoWindow.open(map, currentMarker);
     console.log("CURRENT POSITION: "+lat+lng);
    },

          function() {
            handleLocationError(true,infoWindow, map.getCenter());
          });
  }
//<--- end of current Geolocation

        else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }

        // function fillInAddress() {
        //         // Get the place details from the autocomplete object.
        //         var place = autocomplete.getPlace();
        //
        //         for (var component in componentForm) {
        //           document.getElementById(component).value = '';
        //           document.getElementById(component).disabled = false;
        //         }
        //
        //         // Get each component of the address from the place details
        //         // and fill the corresponding field on the form.
        //         for (var i = 0; i < place.address_components.length; i++) {
        //           var addressType = place.address_components[i].types[0];
        //           if (componentForm[addressType]) {
        //             var val = place.address_components[i][componentForm[addressType]];
        //             document.getElementById(addressType).value = val;
        //           }
        //         }
        //       }

              // Bias the autocomplete object to the user's geographical location,
              // as supplied by the browser's 'navigator.geolocation' object.
              function geolocate() {
                alert("clicked butt");

                if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(function(position) {
                    var geolocation = {
                      lat: position.coords.latitude,
                      lng: position.coords.longitude
                    };
                    var circle = new google.maps.Circle({
                      center: geolocation,
                      radius: position.coords.accuracy
                    });
                    autocomplete.setBounds(circle.getBounds());
                  });
                }
              }

google.maps.event.addListener(map, 'click', function(event) {
  onClickMarker(event.latLng, map);
});


 function onClickMarker(location, map) {
  var marker = new google.maps.Marker({
    position: location,
    label: "!",
    map: map
        });;

  var infowindow = new google.maps.InfoWindow({
    content: addLocation
  });

  marker.addListener('click', function(){
    infowindow.open(map,marker);
  });
      infowindow.open(map,marker);

      }

      function deleteMarkers() {
        clearMarkers();
        markers = [];
      }


  } //<-- end of initMap

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }


function saveData() {
  var type = document.getElementById("type").value;

  var rate = ratingValue;

  $.post("api/obj/submitData.php",{type: type, lat: newLat, lng: newLng, rate:rate }).done(function(data){
    console.log("SUCCESS! Data saved :"+newLat+newLng+type+rate);
  })
}

function searchData() {
  $.post("api/obj/search.php").done(function(data){
    jsonobj = JSON.parse( data )
    // console.log(jsonobj);
    // console.log(jsonobj[0]);
    // console.log("NEW LAT IS: "+jsonobj[7].lat);
    // console.log("NEW LNG IS: "+jsonobj[7].lng);
    // console.log("TYPE IS: "+jsonobj[7].type);
    // console.log("RATING IS: "+jsonobj[7].rate);

for ( i = 0; i < jsonobj.length; i++ ){

 markerPos ={
        lat: parseFloat(jsonobj[i].lat),
        lng: parseFloat(jsonobj[i].lng)
      };

markerType = jsonobj[i].type;
markerRate = jsonobj[i].rate;

      mapMarkers = new google.maps.Marker({
      map: map,
      position: markerPos,
     // icon: BitmapDescriptorFactory.defaultMarker(BitmapDescriptorFactory.HUE_AZURE)
    });
      mapMarkers.setMap(map);
    }

  })
} //<----end of searchData



setTimeout(function(){
 searchData()}, 2000);
