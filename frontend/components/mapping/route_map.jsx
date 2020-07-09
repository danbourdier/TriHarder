import React, {Component} from 'react';


class RouteMap extends Component {

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435},
      zoom: 13
    }

    this.map = new google.maps.Map(this.mapNode, mapOptions)
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