import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

let mapRef;
let map;
let drawingManager;
let markers;
let snappedCoords;
let iconColor;
class TestMap extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      distance: 0,
      firstMarker: false,
      iconColor: "green"
    }
    // this.addAndPlaceMarker.bind(this);
  }

  componentDidMount() {
    markers = [];
    snappedCoords = [];
    mapRef = this.refs.map;
    iconColor = "green";
    const directionsService = new google.maps.DirectionsService;
    const directionsDisplay = new google.maps.DirectionsRenderer;

    map = new google.maps.Map(mapRef, {
      zoom: 16,
      center: {lat: 40.7374579, lng: -74.49510900000001},
        mapTypeId: 'terrain'
    });

    directionsDisplay.setMap(map);

    map.addListener("click", e => {
      this.addAndPlaceMarker(e.latLng, iconColor);
      if (this.state.firstMarker){
        this.calculateAndDisplayRoute(directionsService, directionsDisplay, this.setState.bind(this), this.state);
      }else{
        this.setState({firstMarker: true});
        iconColor = "white";
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

  addAndPlaceMarker(latLng, iconColor){
    const newMarker = new google.maps.Marker({
      position: latLng,
      map: map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: iconColor,
        scale: 5,
        fillOpacity: 1,
        strokeWeight: 3
      },
    });
    markers.push(newMarker);
  }

  addAndPlacePolyline(coords){
    const snappedPolyline = new google.maps.Polyline({
      path: coords,
      strokeColor: 'red',
      strokeWeight: 6
    });
    snappedCoords = snappedCoords.concat(coords);
    snappedPolyline.setMap(map);
    debugger
  }

  removeLatestMarker(){
    markers[markers.length-1].setMap(null);
    markers.pop;
  }

  removeFirstMarker(){
    markers[0].setMap(null);
    markers.shift();
  }

  calculateAndDisplayRoute(directionsService, directionsDisplay, setState, state) {
    const that = this;
    directionsService.route({
      origin: markers[markers.length-2].position,
      destination: markers[markers.length-1].position,
      travelMode: 'WALKING'
    }, function(response, status) {
      if (status === 'OK') {
        const addedDistance = that.extendRouteWithPolyline(response);
        setState({distance: state.distance + addedDistance})
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  extendRouteWithPolyline(response){
    const newRouteData = response.routes[0];
    const newCoords = response.routes[0].overview_path;
    debugger
    if (snappedCoords.length === 0) {
      this.snapFirstMarker(newCoords[0]);
    }

    this.addAndPlacePolyline(newCoords);
    this.snapLatestMarker(newCoords[newCoords.length-1]);


    return newRouteData.legs[0].distance.value;
  }

  snapLatestMarker(latestCoord) {
    this.removeLatestMarker();
    this.addAndPlaceMarker(latestCoord, iconColor);
  }

  snapFirstMarker(firstCoord) {
    this.removeFirstMarker();
    const newMarker = new google.maps.Marker({
      position: firstCoord,
      map: map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: "green",
        scale: 5,
        fillOpacity: 1,
        strokeWeight: 3
      },
    });
    markers.unshift(newMarker);
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
        </div>
      </div>
    );
  }

}
export default withRouter(TestMap);
