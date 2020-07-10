import React, { Component } from "react";

class RouteMapLeft extends Component {
  constructor(props){
    super(props)
    

    this.marks = this.props.markArray;
    this.handleClick.bind(this)
  }

  handleClick() {
    this.marks.forEach(mar => (
      mar.setMap(null)
    ));
    this.marks.length = 0;
    
  }

  render() {


    return (
      <section id="map-page-left" onClick={() => (this.handleClick())}>

      </section>
    )

  };
}


export default RouteMapLeft;