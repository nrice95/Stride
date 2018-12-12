import React from "react";
import { parseRouteDate, parseRouteTime } from "../../reducers/selectors";

let mapRef;
let map;
let route;
class DashboardRouteIndexItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {route: props.route, currentAthlete: props.currentAthlete}
  }

  componentDidMount(){
    // this.setState({route:this.props.route});
    this.state;
    this.props;
    this;
    debugger
    route = this.state.route;
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
  }

  render(){
    const date = parseRouteDate(this.state.route.current_date);
    const time = parseRouteTime(this.state.route.current_date);

    return (
      <li className="dashboard-route">
        <div className="dashboard-route-content">
          <div className="dashboard-avatar-column">
            <a href="#/athlete" className="dashboard-item-avatar">
              <div className="dashboard-item-initial">
                <div>{this.state.currentAthlete.username.charAt(0).toUpperCase()}</div>
              </div>
            </a>
          </div >
          <div className="dashboard-route-summary">
            <a href="#/athlete" className="dashboard-item-name">
              {this.state.currentAthlete.username}
              <div className="dashboard-dateT">{`${date} at ${time}`}</div>
            </a>
            <a href={`#/route/${this.state.route.id}`} className="dashboard-route-title">
              {this.state.route.title}
            </a>
            <div className="route-summary-data">
              <div className="dashboard-datum">
                <div className="dashboard-datum-label">{`Distance`}</div>
                <div className="dashboard-datum-value">{`${Math.floor(this.state.route.distance*0.0621371)/100} mi`}</div>
              </div>
              <div className="dashboard-datum">
                <div className="dashboard-datum-label">{`Elevation`}</div>
                <div className="dashboard-datum-value">{`${Math.floor(this.state.route.distance*0.0621371)/100} m`}</div>
              </div>
              <div className="dashboard-datum">
                <div className="dashboard-datum-label">{`Sport`}</div>
                <div className="dashboard-datum-value">{`${this.state.route.activity_type}`}</div>
              </div>
            </div>
          </div>
        </div>
        <a href={`#/route/${this.state.route.id}`} className="long-map-holder">
          <div className="long-map" ref="map"></div>
        </a>
      </li>
    )
  }
}

export default DashboardRouteIndexItem
