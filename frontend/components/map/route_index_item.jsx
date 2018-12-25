import React from "react";
import { Link } from "react-router-dom";


let mapRef;
let map;
let route;
class RouteIndexItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {route: props.route}
  }

  componentDidMount(){
    // debugger
    this.setState({route:this.props.route});
    // debugger
    route = this.props.route;
    mapRef = this.refs.map;
    map = new google.maps.Map(mapRef, {
      zoom: 12,
      center: {lat: route.center_lat, lng: route.center_lng},
      mapTypeId: 'terrain'
    });
    let coords = [];
    let route = route || {polyline: "", distance: 0};
    google.maps.geometry.encoding.decodePath(
      route.polyline
    ).forEach(coord => {
      const laty = coord.lat();
      const lngx = coord.lng();
      coords.push({lat: laty, lng: lngx});
    })
    var path = new google.maps.Polyline({
      path: coords,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 6
    });

    path.setMap(map);
    let startMarker = new google.maps.Marker({
      position: coords[0],
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
      position: coords[coords.length-1],
      map
    })
  }


  render(){
    let renderRoute = this.state.route;
    return(
      <div className="route-index-item">
        <a href={`#/route/${renderRoute.id}`}>
          <div className="mini-map" ref="map"></div>
        </a>
        <div className="mini-map-label">
          <div className="mini-map-title">
            <a href={`#/route/${renderRoute.id}`}>{renderRoute.title}</a>
          </div>
          <div className="distance-text">
            <div>{Math.round(renderRoute.distance*0.0621371)/100}</div>
            <div>{"mi"}</div>
          </div>
          <div className="distance-label">{`Distance`}</div>
        </div>
      </div>
    )
  }
}

export default RouteIndexItem;
