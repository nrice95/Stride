import React from "react";

class RouteSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({routes: [], map: null});
  }

  componentDidMount(){
    let routesPromise = this.props.fetchRoutes();
    routesPromise.then(response => {
      let mapRef = this.refs.map;
      let map = new google.maps.Map(mapRef, {
        zoom: 18,
        // center: {lat: 40.7374579, lng: -74.49510900000001},
        center: {lat: 40.751484, lng: -73.983898},
        mapTypeId: 'terrain'
      });
      this.placeMarkers(map, response.routes);
      this.setState({map})
    })

  }

  placeMarkers(map, routes){

    let routesArr = Object.keys(routes).map(id => {
      return routes[id]}
    )
    routesArr.forEach(route => {
      debugger
      const newMarker = new google.maps.Marker({
        position: {lat: route.center_lat, lng: route.center_lng},
        map: map,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: "green",
          scale: 8,
          fillOpacity: 1,
          strokeWeight: 3
        }
      });
    })
  }

  render(){
    return(
      <div>
        <div className="map" ref="map"></div>
      </div>
    )
  }
}

export default RouteSearch;
