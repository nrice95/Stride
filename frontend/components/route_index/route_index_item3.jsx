import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/header_container";



let mappy;
let map;
class RouteIndexItem extends React.Component {
  componentDidMount(){
    this.props.fetchRoute(this.props.match.params.routeId);
    let mappy = this.refs.map;
    let map = new google.maps.Map(mappy, {
      zoom: 10,
      center: {lat: 40.7374579, lng: -74.49510900000001},
      mapTypeId: 'terrain'
    });
  }

  render(){
    return(
      <div>
        <div className="map" ref="map"></div>
      </div>
    )
  }
}

export default RouteIndexItem;
