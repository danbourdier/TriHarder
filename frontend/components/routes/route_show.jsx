import React, {Component} from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { GiPathDistance } from 'react-icons/gi';
import { Redirect, Link } from 'react-router-dom';

class RouteShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total_time: 0, distance: 0, lastLegDuration: 0,
      lastDistanceLeg: 0, title: "", activity: "",
      start_point: "", end_point: "", check: false, route_data: [], 
      hiddenFlag: true, 
    };

    this.route = this.props.route;
    // this.routeData = JSON.parse(this.route.route_data);

    // used by our maps service to store and reference markers
    this.points = [];

    // our binded class methods
    this.calcRouteAndRender = this.calcRouteAndRender.bind(this);
    this.createPoint = this.createPoint.bind(this);
    this.setStatePos = this.setStatePos.bind(this);
    this.flagFlip = this.flagFlip.bind(this);
    this.handleDelete = this.handleDelete.bind(this);


    this.currentPoint = 0;
    this.roadSnappedLatLng = 0;
    this.nullPointExecuted = false;
    this.nullPointReset = false;
    this.delayFactor = 1;
  }

  componentDidUpdate(prevProps) {
    if (Object.values(prevProps.routes).length !== Object.values(this.props.routes).length) {

      this.setState({ check: true })
    }
  }

  componentDidMount() {
    if (!this.route) {
      this.props.getRoutes();
      return this.forceUpdate();
    }

    let routeData = JSON.parse(this.route.route_data);

    let map;
    const mapOptions = {
      center: { lat: routeData[0].lat, lng: routeData[0].lng},
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
    this.bounds = new google.maps.LatLngBounds();

    this.directionsDisplay.setMap(this.map);

    routeData.forEach(route => {
      this.delayFactor++
        setTimeout( () => {
          this.createPoint(route)
        }, this.delayFactor * 450)
      });

  }

  handleDelete() {
    return this.props.deleteRoute(this.route.id)
  }

  componentWillUnmount() {
    this.props.getRoutes()
  }

  flagFlip() {
    return this.setState({ hiddenFlag: (!this.state.hiddenFlag) })
  }

  setStatePos(field, value) {
    return this.setState({ [field]: value })
  }

  createPoint(latLng) {
    // below code serves the purpose of closure or *variable scoping*
    // we needed closure because the context of *this* in the api res is applied to a different class
    let that = this;

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

    this.bounds.extend(latLng);
    this.map.fitBounds(this.bounds);

  }

  calcRouteAndRender(directionsService, directionsDisplay) {
    // since we are dealing with asynchronous functions we must enclose our scope from our current state
    // see https://stackoverflow.com/questions/36636/what-is-a-closure
    let that = this;
    // to effectively use directions service to take stops into consideration we slice the below from our points array
    let wayPoints =
      this.points.slice(1, this.points.length - 1).map(point => ({ 
        location: point.position, stopover: true }
        )) || [];
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
    if (!this.route) {
      return <h2 className="error-comp">Error, return to home page</h2>;
    }

    if (this.state.check) {
      return <Redirect to="/home_page" />
    }

    let userProfilePic = {
      backgroundSize: 'cover',
      backgroundImage: 'url(' + rabbit + ')'
    }

      return (
        <main className="route-show-container-parent">

            <div className='route-show-container'>
              <section id="route-show-HUD-container">

                <aside id="route-HUD-container-first-aside">
                  <article id="route-HUD-profile-details">
                    <div style={userProfilePic}></div>
                    <span>{this.props.currentUser.email} |&nbsp;</span>
                    <Link to="/friends" id="route-HUD-friends-link">
                      <FaUserFriends />
                      <span>&nbsp;Friends</span>
                    </Link>
                    
                  </article>
                  <article id="route-HUD-route-details-container">
                    <div id="route-details-container-activity">
                      <span>{this.route.activity}</span>
                    </div>
                    <div id="route-details-container-distance">
                      <GiPathDistance />
                      <span>{Math.floor(this.route.distance)} MI</span>
                    </div>
                  
                  </article>

                  <article id="route-HUD-route-title">{this.route.title}</article>
                </aside>

                <aside id="route-HUD-container-second-aside-container">
                  <button id="route-show-second-aside-button" 
                          onMouseEnter={this.flagFlip}
                          onMouseLeave={this.flagFlip}>
                    <span>GIVE ME MORE!</span>
                    <section className={
                                this.state.hiddenFlag ? "display-none" : 
                                "route-show-page-give-me-more-visible-container"
                              }> 
                                <div><Link to={`/routes/edit/${this.route.id}`} className="route-show-visible-span">Edit</Link></div>
                                  <strong className="route-show-spacer"></strong>
                                <div><a onClick={this.handleDelete} className="route-show-visible-span">Delete</a></div>
                                  <strong className="route-show-spacer"></strong>
                                <div><a href="https://www.linkedin.com/in/danbourdier/" className="route-show-visible-span">Hire me!</a></div>
                                  <strong className="route-show-spacer"></strong>
                    </section>
                  </button>
                </aside>
              </section>

              <section id="route-show-map-container"
                       ref={map => this.mapNode = map}>
                        Our Map!
              </section>
            </div>

        </main>
      )


    

    
  }


}

export default RouteShow;