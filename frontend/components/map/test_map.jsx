import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

let mapRef;
let map;
let drawingManager;
let markers;
let snappedCoords;
let iconProps;
let polylines;
let redoPolylineStack;
let redoMarkerStack;
let distanceStack;
let redoDistanceStack;
let directionsService;
class TestMap extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      distance: 0,
      firstMarker: false,
      iconProps: {color: "#64b717", stroke: "white", scale: 8},
      redoAvailable: false,
      travelMode: "BICYCLING"
    }
    this.clear = this.clear.bind(this);
    this.undo = this.undo.bind(this);
    this.redo = this.redo.bind(this);
    this.toggle = this.toggle.bind(this);
    this.ride = this.ride.bind(this);
    this.run = this.run.bind(this);
    // this.addAndPlaceMarker.bind(this);
  }

  componentDidMount() {
    redoDistanceStack = [];
    distanceStack = [];
    redoPolylineStack = [];
    redoMarkerStack = [];
    polylines = [];
    markers = [];
    snappedCoords = [];
    mapRef = this.refs.map;
    iconProps = {color: "#64b717", stroke: "white", scale: 8};
    directionsService = new google.maps.DirectionsService;
    // const directionsDisplay = new google.maps.DirectionsRenderer;

    map = new google.maps.Map(mapRef, {
      zoom: 18,
      // center: {lat: 40.7374579, lng: -74.49510900000001},
      center: {lat: 40.751484, lng: -73.983898},
        mapTypeId: 'terrain'
    });

    // directionsDisplay.setMap(map);

    map.addListener("click", e => {
      debugger
      this.addAndPlaceMarker(e.latLng, e.pixel, iconProps);
      if (this.state.firstMarker){
        this.calculateAndDisplayRoute(directionsService, this.setState.bind(this), this.state);
      }else{
        this.setState({firstMarker: true});
        iconProps = {color: "white", stroke: "black", scale: 5};
      }
    });

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
  }

  addAndPlaceMarker(latLng, pixel, iconProps){
    const newMarker = new google.maps.Marker({
      position: latLng,
      map: map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: iconProps.color,
        strokeColor: iconProps.stroke,
        scale: iconProps.scale,
        fillOpacity: 1,
        strokeWeight: 3
      }
    });
    markers.push(newMarker);
    if (pixel !== null && this.needsRecenter(pixel)) map.panTo(newMarker.position);
  }

  addAndPlacePolyline(coords){
    const snappedPolyline = new google.maps.Polyline({
      path: coords,
      strokeColor: 'rgb(102,102,102,0.95)',
      strokeWeight: 6
    });
    snappedCoords.push(coords);
    polylines.push(snappedPolyline);
    snappedPolyline.setMap(map);
    markers;
    debugger
  }

  removeLatestMarker(){
    debugger
    markers[markers.length-1].setMap(null);
    markers.pop();
  }

  removeFirstMarker(){
    markers[0].setMap(null);
    markers.shift();
  }

  calculateAndDisplayRoute(directionsService, setState, state) {
    const that = this;
    if (this.state.redoAvailable) {
      this.setState({redoAvailable: false});
      redoMarkerStack = [];
      redoPolylineStack = [];
      redoDistanceStack = [];
    }
    directionsService.route({
      origin: markers[markers.length-2].position,
      destination: markers[markers.length-1].position,
      travelMode: that.state.travelMode,
    }, function(response, status) {
      if (status === 'OK') {
        const addedDistance = that.extendRouteWithPolyline(response,false);
        that.setState({distance: that.state.distance + addedDistance})
        debugger
        distanceStack.push(addedDistance);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  extendRouteWithPolyline(response, toggled){
    const newRouteData = response.routes[0];
    const newCoords = response.routes[0].overview_path;
    debugger
    if (!toggled && snappedCoords.length === 0) {
      this.snapFirstMarker(newCoords[0]);
    }
    this.addAndPlacePolyline(newCoords);
    if (!toggled) this.snapLatestMarker(newCoords[newCoords.length-1]);

    return newRouteData.legs[0].distance.value;
  }

  snapLatestMarker(latestCoord) {
    this.removeLatestMarker();
    this.addAndPlaceMarker(latestCoord, null, iconProps);
  }

  needsRecenter(pixel){
    debugger
    const x = pixel.x;
    const y = pixel.y;
    const w = window.innerWidth;
    const h = window.innerHeight;
    if (x < 50 || x > w - 50) return true;
    if (y < 50 || y > h - 50) return true;
  }

  snapFirstMarker(firstCoord) {
    this.removeFirstMarker();
    const newMarker = new google.maps.Marker({
      position: firstCoord,
      map: map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: "#64b717",
        strokeColor: "white",
        scale: 8,
        fillOpacity: 1,
        strokeWeight: 3
      },
    });
    markers.unshift(newMarker);
  }

  clear(){
    markers.forEach(marker=>{
      marker.setMap(null);
    })
    debugger
    polylines.forEach(poly=>{
      poly.setMap(null);
    })
    this.setState({distance: 0, iconProps: {color: "#64b717", stroke: "white", scale: 8}, firstMarker: false});
    markers= [];
    snappedCoords = [];
    iconProps = {color: "#64b717", stroke: "white", scale: 8};
    polylines = [];
  }

  undo(){
    if (this.state.redoAvailable) this.setState({redoAvailable: true});
    debugger
    if (markers.length > 0){
      this.setState({redoAvailable: true})
      if (markers.length === 1) {
        this.setState({distance: 0, iconProps: {color: "#64b717", stroke: "white", scale: 8}, firstMarker: false});
        iconProps = {color: "#64b717", stroke: "white", scale: 8};
      }else{
    debugger
        const lastDistance = distanceStack.pop();
        redoDistanceStack.push(lastDistance);
        this.setState({distance: this.state.distance - lastDistance});
      }
      let lastMarker = markers.pop();
      redoMarkerStack.push(lastMarker);
      lastMarker.setMap(null);
    }
    if (polylines.length > 0){
      const lastPolyline = polylines.pop();
      redoPolylineStack.push(lastPolyline);
      lastPolyline.setMap(null);
      snappedCoords.pop();
    }
    debugger
  }

  redo(){
    debugger
    if (this.state.redoAvailable) {
      if (markers.length > 0){
        let redonePoly = redoPolylineStack.pop();
        let redoneDistance = redoDistanceStack.pop();
        redonePoly.setMap(map);
        this.setState({distance: this.state.distance + redoneDistance});
        snappedCoords.push(redonePoly.latLngs.j[0].j);
        polylines.push(redonePoly);
        distanceStack.push(redoneDistance);
        if (markers.length === 0) this.setState({redoAvailable: false});
      }
      if (redoMarkerStack.length > 0){
        let redoneMarker = redoMarkerStack.pop();
        redoneMarker.setMap(map);
        markers.push(redoneMarker);
      }
    }
  }

  ride(){
    debugger
    if (this.state.travelMode === "WALKING") {
      this.setState({travelMode: "BICYCLING"});
      this.toggle("BICYCLING");
    }
  }

  run(){
    debugger
    if (this.state.travelMode === "BICYCLING") {
      this.setState({travelMode: "WALKING"});
      this.toggle("WALKING");
    }
  }

  toggle(type){
    polylines.forEach(poly => {
      poly.setMap(null);
    });
    const that = this;
    debugger
    this.setState({distance: 0});
    for (let i = 0; i < markers.length - 1; i++){
      debugger
      directionsService.route({
        origin: markers[i].position,
        destination: markers[i+1].position,
        travelMode: type,
      }, function(response, status) {
        if (status === 'OK') {
          debugger
          const addedDistance = that.extendRouteWithPolyline(response,true);
          that.setState({distance: that.state.distance + addedDistance});
          distanceStack.push(addedDistance);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    }
    debugger
  }

  render() {
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
              <button className="clear" onClick={this.clear}>Clear</button>
              <button className="undo" onClick={this.undo}>Undo</button>
              <button className="redo" onClick={this.redo}>Redo</button>
              <button className="ride" onClick={this.ride}>Ride</button>
              <button className="run" onClick={this.run}>Run</button>
              <p><a className="undo" href="#/map">Undo</a></p>
              <p><a className="clear" href="#/map">Clear</a></p>
            </div>
          </div>

        </nav>
        <div className="map" ref="map">
        </div>
        <div className="map-footer">
          <div className="distance-container">
            <div className="distance-group">
              <p className="distance">{Math.round(this.state.distance*0.0621371)/100}</p>
              <p className="miles">mi</p>
            </div>
            <p>Distance</p>
          </div>
          <div className="distance-container">
            <div className="distance-group">
              <p className="distance">{this.state.travelMode}</p>
              <p className="miles"></p>
            </div>
            <p>Travel Type</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(TestMap);
