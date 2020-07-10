import React, {Component} from 'react';

import RouteMapLeft from "./route_map_left";
import RouteMapRight from "./route_map_right";
// this is being rendered from the higher component: Search located at search.jsx
class RouteMap extends Component {
  constructor(props){
    super(props)

    this.drawingManager;
    this.placeIdArray = [];
    this.polylines = [];
    this.snappedCoordinates = [];
    this.markArray = [];
    this.directionsService = new google.maps.DirectionService();
    this.directionsDisplay = new.google.maps.DirectionsDisplay()
  }

  componentDidMount() {
    // our map init
    let map;

    map = new google.maps.Map(document.getElementById("map-container"), {
      center: { lat: 40.736957, lng: -73.976 }, // what coordinate the map defaults to
      zoom: 15 // specifies what view level to instantiate the map at; 1: world, 5: continent, 10: city...
      }
    );

    // the below listener adds new markers to our map
    map.addListener("click", e => {
      let mark = new google.maps.Marker({
        position: e.latLng,
        map: map
      });
      this.markArray.push(mark)
      // map.panTo(e.latLng)
    });

  }




  render() {


    return (
      <div id="route-page-container">
        <RouteMapLeft markArray={this.markArray}/>

        <section id="map-container" ref="map">
          routeMap!
        </section>

        <RouteMapRight />
      </div>
    )

  };


}







export default RouteMap;