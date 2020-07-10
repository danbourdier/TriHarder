import React, { Component } from "react";

class RouteMapLeft extends Component {
  constructor(props){
    super(props)


    this.points = this.props.pointsArray;
    this.handleClick.bind(this)
  }

  handleClick() {
    this.points.forEach(point => (
      point.setMap(null)
    ));
    this.points.length = 0;
    
  }

  render() {


    return (
      <section id="map-page-left" onClick={() => (this.handleClick())}>

      </section>
    )

  };
}


export default RouteMapLeft;