import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

// const getCoordsObj = latLng => ({
//   lat: latLng.lat(),
//   lng: latLng.lng()
// });
//
// const mapOptions = {
//   center: {
//     lat: 40.7512817,
//     lng: -73.98399010000003
//   }, // San Francisco coords
//   zoom: 17
// };
// Handles click events on a map, and adds a new point to the Polyline.
let mappy;
let map;
let drawingManager;
let markers;
let snappedCoords;
class TestMap extends React.Component {
  constructor(props){
    super(props)
    this.state = {distance: 0}
  }

  componentDidMount() {
    debugger
    markers = [];
    snappedCoords = [];
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    mappy = this.refs.map;
    map = new google.maps.Map(mappy, {
      zoom: 16,
      center: {lat: 40.7374579, lng: -74.49510900000001},
        mapTypeId: 'terrain'
    });
    directionsDisplay.setMap(map);
    this.setState({distance: 0})
    // calculateAndDisplayRoute(directionsService, directionsDisplay, this.setState.bind(this));

    drawingManager = new google.maps.drawing.DrawingManager({
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: [
          google.maps.drawing.OverlayType.MARKER,
          // google.maps.drawing.OverlayType.POLYLINE
        ]
      },
      polylineOptions: {
        strokeWeight: 2
      },
      markerOptions: {
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: this.state.colorOfFill,
            scale: 8,
            fillOpacity: 1,
            strokeWeight: 3
          },
        },
      },
    );

    map.addListener("click", e => {
      // debugger
      const newMarker = new google.maps.Marker({
        position: e.latLng,
        map: map,
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: "white",
            scale: 8,
            fillOpacity: 1,
            strokeWeight: 3
          },
      });
      markers.push(newMarker);
      debugger
      if (markers.length > 1){
        calculateAndDisplayRoute(directionsService, directionsDisplay, this.setState.bind(this), this.state);
      }
    });
  }


  render() {

    return (
      <div>
        {this.state.distance * 0.000621371}
        <div className="map" ref="map">
        </div>
      </div>
    );
  }
}

function calculateAndDisplayRoute(directionsService, directionsDisplay, setState, state) {
  directionsService.route({
    origin: markers[markers.length-2].position,
    destination: markers[markers.length-1].position,
    travelMode: 'WALKING'
  }, function(response, status) {
    if (status === 'OK') {
      const newRouteData = response.routes[0];
      const newCoords = response.routes[0].overview_path;
      var snappedPolyline = new google.maps.Polyline({
        path: newCoords,
        strokeColor: 'red',
        strokeWeight: 6
      });
      snappedPolyline.setMap(map);
      setState({distance: state.distance + newRouteData.legs[0].distance.value})
      // directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}
export default withRouter(TestMap);
