function initMap() {
  var styledMapType = new google.maps.StyledMapType(
    [
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c0c0c0"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#1bb696"
          }
        ]
      }
    ],
  {name: 'Styled Map'});
  
  const map = new google.maps.Map(
    document.getElementById('map'),
    {
      center: { lat: 47.8443337, lng: 35.0873266 },
      zoom: 15,
      disableDefaultUI: true,
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                'styled_map']
      }
    },
  );

  var marker = new google.maps.Marker({
    position: { lat: 47.8413350, lng: 35.0984266 },
    icon: {
      url: 'img/svg/map_marker.svg',
      scaledSize: new google.maps.Size(30, 40)
    },
      map: map
  });

  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');

  map.setOptions({
    draggable: true, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: false,
  });
};