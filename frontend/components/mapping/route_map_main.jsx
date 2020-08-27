import React, {Component} from 'react';

import RouteMapLeft from "./route_map_left";
import RouteMapRight from "./route_map_right";
import { Redirect } from 'react-router-dom';

// rendered from the higher component: Search located at search.jsx
class RouteMap extends Component {
  constructor(props) {
    super(props);
    this.state = { total_time: 0, distance: 0, lastLegDuration: 0, 
      lastDistanceLeg: 0, title: "", activity: "", description: "", 
      start_point: "", end_point: "", check: false, route_data: []
    };
    // array below used so we can store our points and conveniently delete them
    this.points = [];

    // props
    this.createRouteComment = this.props.createComment;

    // our binded class methods
    this.calcRouteAndRender = this.calcRouteAndRender.bind(this);
    this.createPoint = this.createPoint.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setStatePos = this.setStatePos.bind(this)
    this.geocodeAddress = this.geocodeAddress.bind(this);

    // our binded update method
    this.update = this.update.bind(this)

    // to remove all points located on line: 
    this.nullAllPoints = this.nullAllPoints.bind(this);
    this.nullPoint = this.nullPoint.bind(this);
    // below are our two flags to help track concurrency so our final outcome stays the same
      // Much used for execution of asynchronous requests see: https://en.wikipedia.org/wiki/Concurrency_(computer_science)
    this.currentPoint = 0;
    this.roadSnappedLatLng = 0;
    this.nullPointExecuted = false;
    this.nullPointReset = false;

  };

  componentDidUpdate(prevProps) {
    if (Object.values(prevProps.routes).length !== Object.values(this.props.routes).length) {

    let postRouteComment = Object.assign({}, {
        'author_email': this.props.currentUser.email,
        'body': `${this.props.currentUser.email} has completed a ${this.props.lastRoute.activity}! `,
        'author_id': this.props.currentUser.id
      });
 
      this.createRouteComment(postRouteComment);
      this.setState({check: true})
    }
  }

  handleClick(arg) {
    const { createRoute } = this.props; // when destructuring objects we must name the names of keys we want

    return () => {

      createRoute(arg)
    };
  }

  update(field) {
    // although #setState is asynchronous, we make it synchronous by enclosing it in an sync function
    return e => this.setState({ [field]: e.currentTarget.value })
  };

  setStatePos(field, value) {
    return this.setState({[field]: value})
  }


  componentDidMount() {
    let map;
    const mapOptions = {
      center: { lat: 40.744661381538805, lng: -73.98616038721435 },
      zoom: 15, // zoom level bench marks are 0: globeview, 5: continent view, 10: state...
      styles: [
        {
          'featureType': 'poi',
          'stylers': [
            { 'visibility': 'off' }
          ]
        }
      ]
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

  geocodeAddress(geocoder, resultsMap) {
    const address = document.getElementById("ec-address").value;
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === "OK") {
        resultsMap.setCenter(results[0].geometry.location);
        // new google.maps.Marker({
        //   map: resultsMap,
        //   position: results[0].geometry.location
        // });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    })
  } 

  createPoint(latLng) {
    // below code (l:138) serves the purpose of closure or *variable scoping*
    // we needed closure because the context of *this* in the api res is applied to a different class
    let that = this;
    //  [[`${latLng.lat()}`, `${latLng.lng()}`]]
    this.setState( {route_data: this.state.route_data.concat( { 'lat': `${latLng.lat()}`, 'lng': `${latLng.lng()}` } ) } )

    this.directionsService.route({
      origin: latLng,
      destination: latLng,
      travelMode: 'WALKING'
    }, (res, status) => {
      if (status === 'OK') {
        that.currentPoint = new google.maps.Marker({
          position: res.routes[0].legs[0].start_location,
          map: that.map,
          icon: window.logo_marker
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
          that.setState({ total_time: (that.state.total_time -= that.state.lastLegDuration), 
            distance: (that.state.distance -= that.state.lastDistanceLeg) 
          });
        } else {
          that.setState({ total_time: (that.state.total_time += lastDuration), 
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

  
  // to remove any point is a two step process we must first:
    // execute #setMap() on a point
    // #pop() from wherever it is stored HENCE why we have an array in our constructor
  nullAllPoints() {
    // first conditional is our edgeCase so we dont get an error of #setMap being executed on undefined
    if (this.points.length === 0) {
    } else if (this.points.length > 0 && this.points.length < 2) {
      return this.nullPoint()
    };

    // below loop is step one of deletion
    for (let i = 0; i < this.points.length; i += 1) {
      this.points[i].setMap(null)
    }
    // below is step two of deletion
    this.points.length = 0;
    
    // below *refreshes* our directions API so to speak
    this.directionsDisplay.setMap(null); 
    // our flag indicating our process has been tracked and completed
    this.nullPointReset = true;
    return this.setState({ total_time: 0, distance: 0, lastLegDuration: 0, lastDistanceLeg: 0 })
  }

  nullPoint() {
    // first conditional is our edgeCase so we dont get an error of #setMap being executed on undefined
    if (this.points.length === 0) {
      return // returns nothing!
    // second edgecase is to prevent an error from directionsService from rendering when it is expecting two object
      // to function
    } else if (this.points.length === 1) {
        this.points[0].setMap(null)
        this.points.length = 0;
        return 
    } else {
      // the below is to remove the last leg in our collection of points
      this.points[this.points.length - 1].setMap(null);
      this.points.pop();
      // our above mentioned flag from #nullAllPoints
      this.nullPointExecuted = true;

      // below updates our state with the returned data from an API request to Google Directions API
        // first argument takes distances and calculations into account
        // second argument makes a request to the API to update our map after passing it the object which is our map
      this.calcRouteAndRender(this.directionsService, this.directionsDisplay);
    }
  }

  render() {
    if (this.state.check === true) {
      return <Redirect to="/home_page"/>
    }
    // we pass our null functions as props below so our asides have functionality to interact with our main component!
    return (
      <div>
        <div id="ec-123-map-spacer"></div>

        <div className='route-page-container'>
          <RouteMapLeft 
            geocode={this.geocode}
            geocodeAddress={this.geocodeAddress}
            handleClick={this.handleClick}
            createRoute={this.createRoute}
            thatState={this.state} 
            update={this.update} 
            currentErrors={this.props.currentErrors}
            total_time={this.state.total_time} 
            distance={this.state.distance} 
            createComment={this.createRouteComment}
            points={this.points}
          />

          <section  
            id="map-container" 
            ref={map => this.mapNode = map}>Our Map!
          </section>

        </div>

          <RouteMapRight 
            total_time={this.state.total_time} 
            distance={this.state.distance} 
            nullPoint={() => (this.nullPoint())} 
            nullAllPoints={() => (this.nullAllPoints())}
          />

      </div>
      
    )
  }

}







export default RouteMap;