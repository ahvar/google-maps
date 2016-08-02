     
     // TODO: Create a map variable
     var mexicoMap;
     var bluishStyledMap;
     // TODO: Complete the following function to initialize the map
     function initMXMap() {
      google.maps.visualRefresh = true;
      var mapOptions = {
      zoom: 10,
      center: new google.maps.LatLng(19.4326,-99.133208),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.BOTTOM_CENTER,
        mapTypeIds:[google.maps.MapTypeId.ROADMAP,'new_bluish_style']
      },
      panControl:true,
      panControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT
      },
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.LEFT_CENTER
      }
     };
       // TODO: use a constructor to create a new map JS object. You can use the coordinates
       // we used, 40.7413549, -73.99802439999996 or your own!
       mexicoMap = new google.maps.Map(document.getElementById('mapMX'), mapOptions);
       bluishStyledMap = new google.maps.StyledMapType(bluishStyle,{name: "Bluish Google Base Map with Pink Highways"});
       mexicoMap.mapTypes.set('new_bluish_style',bluishStyledMap);
       mexicoMap.setMapTypeId('new_bluish_style');

       //this code block will check whether the browser supports Geolocation API and sets the center
       //of the map according to the coordinates of the device
       if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function(position) {
          var lat = position.coords.latitude;
          var lng = position.coords.longitude;
          //Creating LatLng object with latitude and longitude
          var devCenter = new google.maps.LatLng(lat,lng);
          map.setCenter(devCenter);
          map.setZoom(15);
        });
       }
       startButtonEvents();
       var geocoder = new google.maps.Geocoder;
       var morelia = {lat: 19.705950, lng: -101.194982};
       var df = {lat: 19.432608, lng: -99.133208};
       geocoder.geocode({'address': 'Ucareo',}, function(results,status) {
          if (status === 'OK') {
            mexicoMap.setCenter(results[0].geometry.location);
            new google.maps.Marker({
              map: mexicoMap,
              position: results[0].geometry.location
            });
            new google.maps.Marker({
              map: mexicoMap,
              position: morelia
            });
            new google.maps.Marker({
              map: mexicoMap,
              position: df
            });

          } else {
            window.alert('Google was not successful for the following reason: ' + status);
          }
       });
      }

      //this puts the map center at Districto Federal, MX
      function zoomToDF() {
        var df = new google.maps.LatLng(19.4326,-99.133208);
        mexicoMap.setCenter(df);
      }
      //this zooms the map to a street view
      function zoomToStreet() {
        mexicoMap.setZoom(22);
      }

      function startButtonEvents() {
        document.getElementById('btnZoomToDF').addEventListener('click',function() {
          zoomToDF(); 
        });
        document.getElementById('btnZoomToStr').addEventListener('click',function(){
          zoomToStreet();
        });
        document.getElementById('btnRoad').addEventListener('click',function(){
          mexicoMap.setMapTypeId(google.maps.MapTypeId.ROADMAP);
        });
        document.getElementById('btnSat').addEventListener('click',function(){
          mexicoMap.setMapTypeId(google.maps.MapTypeId.SATELLITE);
        });
        document.getElementById('btnHyb').addEventListener('click',function() {
          mexicoMap.setMapTypeId(google.maps.MapTypeId.HYBRID);
        });
        document.getElementById('btnTer').addEventListener('click',function(){
          mexicoMap.setMapTypeId(google.maps.MapTypeId.TERRAIN);
        });
      }