import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

var apiKey="AIzaSyA4rAT0fdTZLNkJ5o0uaAwZ89vVPQpr_Kc";
let mappy;
let map;

var drawingManager;
var placeIdArray;
var polylines;
let markers;
var snappedCoordinates;
let distance = 0;
let distanceStack = [0];
let pathLengthStack;
let allSnaps;
class Map extends React.Component {
  constructor(props){
    super(props);
    this.state = {distance: 0, colorOfFill: "green"}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    placeIdArray = [];
    polylines = [];
    markers = [];
    snappedCoordinates = [];
    this.setState({distance: 0});
    pathLengthStack = [];
    allSnaps = [];
        debugger
    // const map = this.refs.map;
    // this.map = new google.maps.Map(map, mapOptions);
    mappy = this.refs.map;
    map = new google.maps.Map(mappy, {
        zoom: 16,
        center: {lat: 40.7374579, lng: -74.49510900000001},
        mapTypeId: 'terrain'
    });
    debugger


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

    // let colorOfFill = "green";
    // if (markers.length === 0){
    //   colorOfFill = "green";
    // }
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
    drawingManager.setMap(map);

    drawingManager.addListener('markercomplete', (marker) =>{
      this.setState({colorOfFill: "white"});
      debugger
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
        placeIdArray = [];
        runSnapToRoad(path, this.setState.bind(this));
        // this.setState({distance: distance});
        // callback();
        // debugger
        // setTimeout(this.setState({distance: this.state.distance + distanceStack[distanceStack.length-1]}), 5000);

        // debugger
      }
      // console.log(polylines.length);
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
      // this.setState({distance: distance});
      distanceStack = [];
      allSnaps = [];
      pathLengthStack = [];
      ev.preventDefault();
      return false;
    });

    $('.undo').click(function(ev) {
      // debugger
      if (polylines.length > 0){
        for (let i = 0; i < polylines[0].length; i++){
          allSnaps.shift();
          distance -= distanceStack[distanceStack.length-1];
        }
        polylines[0].setMap(null);
        polylines.shift();
        // debugger
        // this.setState({distance: this.state.distance -= distanceStack[distanceStack.length-1]});
        // distanceStack.pop();
      }
      if (markers.length > 0){
        markers[markers.length-1].setMap(null);
        markers.pop();
      }
      ev.preventDefault();
      return false;
    });


    // $('.save').click(function(ev) {
    //   debugger
    //   const encode = google.maps.geometry.encoding.encodePath(allSnaps);
    //   console.log(encode);
    //
    //   ev.preventDefault();
    //   return false;
    // });

  }

  handleSubmit(e){
    e.preventDefault();
    const encode = google.maps.geometry.encoding.encodePath(allSnaps);
    // debugger
    const newRoute = {polyline: encode, athlete_id: this.props.current_athlete_id, activity_type: "Run", title: "tests"};
    debugger
    // this.props.createRoute(newRoute).then(() => this.props.history.push("/routes"));
    this.props.openRouteModal("saveRoute", newRoute.polyline);
  }

  render() {
    const { openRouteModal } = this.props
    return (
      <div>
        <header>
          <div className="map-header-items">
            <div className="left-map-header">
              <a href="#/dashboard" className="map-stride-title">STRIDE</a>
              <div className="route-builder">{`ROUTE BUILDER`}</div>
            </div>
            <a href="#/routes" className="exit-builder">Exit Builder</a>
          </div>
        </header>
        <nav className="sub-header">
          <div className="left-sub-header">
            <p className="auto"><input type="text" className="autoc" placeholder="New York, New York, United States" ref="autoc"/></p>
            <div className="map-history-buttons">
              <p><a className="undo" href="#/map">Undo</a></p>
              <p><a className="clear" href="#/map">Clear</a></p>
            </div>
          </div>
          <button className="new-route-button" onClick={this.handleSubmit}>Save</button>

        </nav>
        <div className="map" ref="map">
        </div>
        <div className="map-footer">
          <div className="distance-container">
            <div className="distance-group">
              <p className="distance">{Math.round(distance*0.0621371)/100}</p>
              <p className="miles">mi</p>
            </div>
            <p>Distance</p>
          </div>
        </div>
      </div>
    );
  }
}

function runSnapToRoad(path, setState) {
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
    const dist = drawSnappedPolyline();
    setState({distance: dist});
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

const drawSnappedPolyline = () => {
  // debugger
  let newSnaps = [];
  allSnaps.unshift(...snappedCoordinates.slice(1));
  newSnaps.unshift(...snappedCoordinates.slice(1));
  if (allSnaps.length === 0) {
    allSnaps.push(snappedCoordinates[0]);
    newSnaps.push(snappedCoordinates[0]);
  }
  // debugger
  var snappedPolyline = new google.maps.Polyline({
    path: snappedCoordinates,
    strokeColor: 'red',
    strokeWeight: 6
  });
  debugger

  snappedPolyline.setMap(map);
  polylines.unshift(snappedPolyline);
  let polies = snappedPolyline.latLngs.j[0].j;
  let tmpDist = 0;
  debugger
  for (let i = 0; i < polies.length - 1; i++){
    const dist = google.maps.geometry.spherical.computeDistanceBetween(polies[i], polies[i+1]);
    tmpDist += dist;
  }
  distanceStack.push(tmpDist);
  distance += distanceStack[distanceStack.length-1]
  return distance;
  // debugger
}

export default withRouter(Map);
