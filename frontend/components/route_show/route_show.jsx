import React from "react";
import { Link } from "react-router-dom";


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
    const route = this.props.route || {polyline: ""};

    var coords = [];
    google.maps.geometry.encoding.decodePath(
      route.polyline
    ).forEach(coord => coords.push({lat: coord.lat(), lng: coord.lng()}))


    var path = new google.maps.Polyline({
      path: coords,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 6
    });

    path.setMap(map);
    return(
      <div>
        <div className="map" ref="map"></div>
      </div>
    )
  }
}

export default RouteShow;
