import React, {Component} from 'react';

import RouteMapLeft from "./route_map_left";
// this is being rendered from the higher component: Search located at search.jsx
class RouteMap extends Component {
  constructor(props){
    super(props)


    this.markArray = [];
  }

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

      this.markArray.push(mark)
      // map.panTo(e.latLng)
    })
  }




  render() {


    return (
      <div id="route-page-container">
        <RouteMapLeft markArray={this.markArray}/>

        <section id="map-container" ref="map">
          routeMap!
        </section>
      </div>
    )

  };


}







export default RouteMap;