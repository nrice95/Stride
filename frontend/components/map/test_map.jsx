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

class TestMap extends React.Component {
  componentDidMount() {
    var map = new google.maps.Map(this.refs.map, {
          zoom: 3,
          center: {lat: 0, lng: -180},
          mapTypeId: 'terrain'
        });
        debugger
        const x = google.maps.geometry.encoding.decodePath("wrswF`zueMbC}@??_BuLe@{C_@Q}HpYlD{A??pDsAkU~DNTdA~A??VAFAHCbEiB??f@S");

        var coords =[];

        for (let i = 0; i < x.length; i++){
            coords.push({lat: x[i].lat(), lng: x[i].lng()})
        }

        var flightPath = new google.maps.Polyline({
          path: coords,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        flightPath.setMap(map);
    }

  render() {

    return (
      <div>
        <div className="map" ref="map">
        </div>
      </div>
    );
  }
}

export default withRouter(TestMap);
