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


var apiKey="AIzaSyA4rAT0fdTZLNkJ5o0uaAwZ89vVPQpr_Kc";
let mappy;
let map;

var drawingManager;
var placeIdArray = [];
var polylines = [];
let markers = [];
var snappedCoordinates = [];
let distance = 0;
let distanceStack = [];
let pathLengthStack = [];
class Map extends React.Component {
  componentDidMount() {
    // const map = this.refs.map;
    // this.map = new google.maps.Map(map, mapOptions);
    mappy = this.refs.map;
    map = new google.maps.Map(mappy, {
          zoom: 16,
          center: {lat: 40.7374579, lng: -74.49510900000001},
          mapTypeId: 'terrain'
      });


      // Adds a Places search box. Searching for a place will center the map on that
      // location.
      map.controls[google.maps.ControlPosition.RIGHT_TOP].push(
          this.refs.bar);
      var autocomplete = new google.maps.places.Autocomplete(
        this.refs.autoc);
      autocomplete.bindTo('bounds', map);
      autocomplete.addListener('place_changed', function() {
        var place = autocomplete.getPlace();
        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);
        }
      });

        // Enables the polyline drawing control. Click on the map to start drawing a
        // polyline. Each click will add a new vertice. Double-click to stop drawing.
        drawingManager = new google.maps.drawing.DrawingManager({
          drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [
              google.maps.drawing.OverlayType.MARKER,
              google.maps.drawing.OverlayType.POLYLINE
            ]
          },
          polylineOptions: {
            strokeWeight: 2
          },
          markerOptions: {
            // visible: false
          },
        });
        drawingManager.setMap(map);

        // Snap-to-road when the polyline is completed.
        drawingManager.addListener('polylinecomplete', function(poly) {
          var path = poly.getPath();
          polylines.push(poly);
          placeIdArray = [];
          runSnapToRoad(path);

        });

        drawingManager.addListener('markercomplete', (marker) =>{
          markers.push(marker);
          if (markers.length > 1){
            let newPoly = new google.maps.Polyline({
              path: [
                markers[markers.length-1].position,
                markers[markers.length-2].position
              ],
              geodesic: true,
              strokeColor: '#FF0000',
              strokeOpacity: 1.0,
              strokeWeight: 2
            });
            var path = newPoly.getPath();
            pathLengthStack.push(path.length);
            polylines.push(newPoly);
            placeIdArray = [];
            runSnapToRoad(path);
            // debugger
          }
        });

        $('.clear').click(function(ev) {
          for (var i = 0; i < polylines.length; ++i) {
            polylines[i].setMap(null);
          }
          polylines = [];
          for (var i = 0; i < markers.length; ++i) {
            markers[i].setMap(null);
          }
          markers = [];
          distance = 0;
          distanceStack = [];
          ev.preventDefault();
          return false;
        });

        $('.undo').click(function(ev) {
          if (polylines.length > 0){
            for (let i = 0; i < pathLengthStack[pathLengthStack.length-1]; i++){
              polylines[polylines.length-1].setMap(null);
            }
            polylines.pop();
            // debugger
            distance -= distanceStack[distanceStack.length-1];
            distanceStack.pop();
          }
          if (markers.length > 0){
            markers[markers.length-1].setMap(null);
            markers.pop();
          }
          ev.preventDefault();
          return false;
        });

        $('.save').click(function(ev) {

          ev.preventDefault();
        });


    }

  render() {

    return (
      <div>
        <div className="map" ref="map"></div>
        <div className="bar" ref="bar`">
          <p className="auto"><input type="text" className="autoc" ref="autoc"/></p>
          <p><a className="clear" href="#">Click here</a> to clear map.</p>
          <p><a className="undo" href="#">undo</a></p>
          <p><a className="save" href="#">save</a></p>
        </div>
      </div>
    );
  }
}

function runSnapToRoad(path) {
  var pathValues = [];
  for (var i = 0; i < path.getLength(); i++) {
    pathValues.push(path.getAt(i).toUrlValue());
  }
  $.get('https://roads.googleapis.com/v1/snapToRoads', {
    interpolate: true,
    key: apiKey,
    path: pathValues.join('|')
  }, function(data) {
    processSnapToRoadResponse(data);
    drawSnappedPolyline();
  });
}

// Store snapped polyline returned by the snap-to-road service.
function processSnapToRoadResponse(data) {
  snappedCoordinates = [];
  placeIdArray = [];
  for (var i = 0; i < data.snappedPoints.length; i++) {
    var latlng = new google.maps.LatLng(
        data.snappedPoints[i].location.latitude,
        data.snappedPoints[i].location.longitude);
    snappedCoordinates.push(latlng);
    placeIdArray.push(data.snappedPoints[i].placeId);
  }
}

// Draws the snapped polyline (after processing snap-to-road response).
function drawSnappedPolyline() {
  var snappedPolyline = new google.maps.Polyline({
    path: snappedCoordinates,
    strokeColor: 'red',
    strokeWeight: 6
  });

  snappedPolyline.setMap(map);
  polylines.push(snappedPolyline);
  let polies = snappedPolyline.latLngs.j[0].j;
  for (let i = 0; i < polies.length - 1; i++){
    const dist = google.maps.geometry.spherical.computeDistanceBetween(polies[i], polies[i+1]);
    distance += dist;
    distanceStack.push(dist);
  }
  console.log(distance*0.000621371);

}

export default withRouter(Map);
