import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

class Route extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total_time: 0, distance: 0, lastLegDuration: 0,
      lastDistanceLeg: 0, title: "", activity: "", description: "",
      start_point: "", end_point: "", check: false, route_data: []
    };

    this.route = this.props.route
    debugger
    this.routeData = JSON.parse(this.route.route_data)
    // used by our maps service to store and reference markers
    this.points = [];

    // our binded class methods
    this.calcRouteAndRender = this.calcRouteAndRender.bind(this);
    this.createPoint = this.createPoint.bind(this);
    this.setStatePos = this.setStatePos.bind(this);


    this.currentPoint = 0;
    this.roadSnappedLatLng = 0;
    this.nullPointExecuted = false;
    this.nullPointReset = false;

  }

  componentDidMount() {
    let map;
    const mapOptions = {
      center: { lat: 40.744661381538805, lng: -73.98616038721435 },
      zoom: 17, // zoom level bench marks are 0: globeview, 5: continent view, 10: state...
      styles: [
        {
          'featureType': 'poi',
          'stylers': [
              {'visibility': 'off'}
          ]
        }
      ]
    };


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

    this.routeData.forEach(route => {
      this.createPoint(route)
    })

  }


  update(field) {
    // although #setState is asynchronous, we make it synchronous by enclosing it in an sync function
    return e => this.setState({ [field]: e.currentTarget.value })
  };

  setStatePos(field, value) {
    return this.setState({ [field]: value })
  }

  createPoint(latLng) {
    // below code serves the purpose of closure or *variable scoping*
    // we needed closure because the context of *this* in the api res is applied to a different class
    let that = this;
    // this.setState({ route_data: this.state.route_data.concat([[`${latLng.lat()}`, `${latLng.lng()}`]]) })

    this.directionsService.route({
      origin: latLng,
      destination: latLng,
      travelMode: 'WALKING'
    }, (res, status) => {
      if (status === 'OK') {
        that.currentPoint = new google.maps.Marker({
          position: res.routes[0].legs[0].start_location,
          map: that.map,
          // icon: window.flag
        })
        that.points.push(that.currentPoint);
        // sets our state's start/end point to res pos
        if (that.points.length === 1) {
          that.setStatePos('start_point', (`${that.points[0].position.lat()}` + "," + `${that.points[0].position.lng()}`))
        } else if (that.points.length > 1) {
          that.setStatePos('end_point', (`${that.points[that.points.length - 1].position.lat()}` + "," + `${that.points[that.points.length - 1].position.lng()}`))
        }
        // supposed to *hide* our last marker
        if (that.points.length > 1) {
          that.calcRouteAndRender(that.directionsService, that.directionsDisplay);
        } else if (this.points.length > 2) {
          this.points[this.points.length - 2].setMap(null)
        }

      };
    });
  }

  calcRouteAndRender(directionsService, directionsDisplay) {
    // since we are dealing with asynchronous functions we must enclose our scope from our current state
    // see https://stackoverflow.com/questions/36636/what-is-a-closure
    let that = this;
    // to effectively use directions service to take stops into consideration we slice the below from our points array
    let wayPoints =
      this.points.slice(1, this.points.length - 1).map(point => ({ location: point.position, stopover: true })) || [];
    // directions service API takes at minimum 3 objects with optional waypoints
    directionsService.route({
      origin: this.points[0].position,
      destination: this.points[this.points.length - 1].position,
      travelMode: 'WALKING',
      waypoints: wayPoints
    }, (res, status) => {
      if (status === 'OK') {

        // https://developers.google.com/maps/documentation/javascript/directions#DirectionsResults for understanding repsonse of directions request
        // stores our latest leg from the array returned within the responses routes key-value
        // each click is a new object stored under the response's [routes]: []
        let lastLegIndex = res.routes[0].legs.length - 1; // this stores the index of the last route's index for future convenience
        let lastLeg = res.routes[0].legs[lastLegIndex];
        // Since each route contains calculated distance and duration as text at the index 
        // specified above, we must convert it from string to a valid number
        let lastDist = parseFloat(lastLeg.distance.text.slice(0.4))
        let lastDuration = parseFloat(lastLeg.duration.text.slice(0.4));
        // if the returned object's distance contains feet then we apply our conversion
        if (lastLeg.distance.text.includes('ft')) {
          lastDist = parseFloat((lastDist / 5280).toFixed(2));
        }

        // if the returned object's duration contains feet then we apply our conversion
        if (lastLeg.duration.text.includes('hour')) {
          lastDuration = parseFloat((lastDuration * 60).toFixed(2));
        }
        // if we recently removed a point then we set the state to equal the substraction of said point and duration
        if (that.nullPointExecuted) {
          this.nullPointExecuted = false;
          that.setState({
            total_time: (that.state.total_time -= that.state.lastLegDuration),
            distance: (that.state.distance -= that.state.lastDistanceLeg)
          });
        } else {
          that.setState({
            total_time: (that.state.total_time += lastDuration),
            distance: that.state.distance += lastDist
          });

        }

        that.setState({ lastLegDuration: lastDuration, lastDistanceLeg: lastDist });

        if (that.nullPointReset) {
          that.nullPointReset = false;
          // although it is optional it is considered standard practice to re-set the directions Display API map to our map
          that.directionsDisplay.setMap(that.map)
        }
        directionsDisplay.setDirections(res);
      } else {
        window.alert('Request failed due to: ' + status);
      }
    });

  }


  render () {

      const { total_time, distance, activity, description, 
        title, created_at, updated_at 
      } = this.route

      return (
        <main className="route-show-container-parent">

            <div className='route-show-container'>
              <section
                id="route-show-map-container"
                ref={map => this.mapNode = map}>Our Map!
              </section>
            </div>

        </main>
      )


    

    
  }


}

export default Route;