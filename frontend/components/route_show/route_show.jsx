import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/header_container";


let mappy;
let map;
class RouteShow extends React.Component {
  // constructor(props){
  //   super(props);
  // }

  componentDidMount() {
    this.props.fetchRoute(this.props.match.params.routeId);

    mappy = this.refs.map;
    map = new google.maps.Map(mappy, {
      zoom: 16,
      center: {lat: 40.7374579, lng: -74.49510900000001},
      mapTypeId: 'terrain'
    });
  }

  render(){
    // debugger
    // debugger
    const route = this.props.route || {polyline: "", distance: 0, elevation: 0};
    // mappy = this.refs.map;
    // map = new google.maps.Map(mappy, {
    //   zoom: 16,
    //   center: {lat: 40.7374579, lng: -74.49510900000001},
    //   mapTypeId: 'terrain'
    // });
    var coords = [];
    let maxLat = -90;
    let maxLng = -180;
    let minLat = 90;
    let minLng = 180;
    google.maps.geometry.encoding.decodePath(
      route.polyline
    ).forEach(coord => {
      const laty = coord.lat();
      const lngx = coord.lng();
      coords.push({lat: laty, lng: lngx});
      // if (laty > maxLat){
      //   maxLat = laty;
      // }if (laty < minLat){
      //   minLat = laty
      // }if (lngx > maxLat){
      //   maxLat = lngx;
      // }if (lngx < minLat){
      //   minLat = lngx
    })

    // console.log((maxLat-minLat)/2);
    // console.log((maxLng-minLng)/2);

    if (typeof map !== "undefined"){
      map.setCenter({lat: route.center_lat, lng: route.center_lng});
    }


    var path = new google.maps.Polyline({
      path: coords,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 6
    });

    path.setMap(map);
    let startMarker = new google.maps.Marker({
      position: coords[coords.length-1],
      icon: {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: "green",
          scale: 8,
          fillOpacity: 1,
          strokeWeight: 3
        },
      map
    })
    let endMarker = new google.maps.Marker({
      position: coords[0],
      map
    })
    // debugger
    let elevation = route.elevation;
    if (typeof route.elevation === "undefined"){
      elevation = 0;
    };
    return(
      <div>
        <Header />
        <div className="route-show-content">
          <div>
            <a href="#/routes">My Routes/</a>
            <div>{route.title}</div>
          </div>
          <div className="route-title">
            {route.title}
          </div>
          <div className="map-and-user">
            <div className="med-map" ref="map"></div>
            <div className="user-stuff">
              <div>
                <a href="#/athlete" className="route-avatar">
                  <div className="route-avatar-char">
                    {this.props.athlete.username.charAt(0).toUpperCase()}
                  </div>
                </a>
                <div>{`By ${this.props.athlete.username}`}</div>
              </div>
              <div>
                <div>
                  <div>
                    {`${Math.round(0.0621371 * route.distance)/100}mi`}
                  </div>
                  <div>Distance</div>
                </div>
                <div>
                  <div>
                    {`0m`}
                  </div>
                  <div>Elevation Gain</div>
                </div>
              </div>
              <div className="description-route">
                <div>{route.description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RouteShow;
