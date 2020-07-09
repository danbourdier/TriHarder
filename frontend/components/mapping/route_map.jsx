import React, {Component} from 'react';


// this is being rendered from the higher component: Search located at search.jsx
class RouteMap extends Component {

  componentDidMount() {
    // our map init
    let map;
    map = new google.maps.Map(document.getElementById("map-container"), {
      center: { lat: 40.736957, lng: -73.976 }, // what coordinate the map defaults to
      zoom: 15// specifies what view level to instantiate the map at; 1: world, 5: continent, 10: city...
      }
    );

    map.addListener("click", e => {
      let mark = new google.maps.Marker({
        position: e.latLng,
        map: map
      });

      map.panTo(e.latLng)
    })
  }




  render() {

    return (
      <div id="map-container" ref="map">
        routeMap!
      </div>
    )

  };


}







export default RouteMap;