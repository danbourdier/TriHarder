import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

class Route extends Component {
  constructor(props) {
    super(props)

    this.route = this.props.route

    this.points = [];

    this.total_time = this.props.total_time;
    this.distance = this.props.distance;

    // our binded class methods
    this.calcRouteAndRender = this.calcRouteAndRender.bind(this);
    this.createPoint = this.createPoint.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setStatePos = this.setStatePos.bind(this)
    this.geocodeAddress = this.geocodeAddress.bind(this);

  }

  componentDidMount() {
    let map;
    const mapOptions = {
      center: { lat: 40.744661381538805, lng: -73.98616038721435 },
      zoom: 17, // zoom level bench marks are 0: globeview, 5: continent view, 10: state...
      // styles: this.props.mapStyles
    };

    this.geocoder = new google.maps.Geocoder();
    this.directionsService = new google.maps.DirectionsService();

    this.directionsDisplay = new google.maps.DirectionsRenderer({
      // below line removes the feature of adding alphanumerical waypoints, and allows room 
      // for customization
      // suppressMarkers: true, 
      polylineOptions: { strokeColor: "skyblue", strokeWeight: 12 }, // https://developers.google.com/maps/documentation/javascript/examples/overlay-symbol-custom
      preserveViewport: true
    });

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    // map = new google.maps.Map(this.mapNode, mapOptions);

    this.directionsDisplay.setMap(this.map);
    // this.directionsDisplay.setMap(map);

    // our ONLY map event listener with the purpose of creating points with a call to #createPoint
    google.maps.event.addListener(this.map, 'click', (e) => {

      this.createPoint(e.latLng);
    });

    document.getElementById("ec-pan-submit").addEventListener("click", () => {
      this.geocodeAddress(this.geocoder, this.map);
    });

  }


  render () {

      const { total_time, distance, activity, description, 
        title, created_at, updated_at 
      } = this.route

      return (
        <main>

          <section>{title}</section>

        </main>
      )


    

    
  }


}

export default Route;