import React, { Component } from "react";

class RouteMapRight extends Component {
  constructor(props) {
    super(props)

    // this.marks = this.props.markArray;
    this.handleClick.bind(this)
  }

  handleClick() {
    // this.marks.forEach(mar => (
    //   mar.setMap(null)
    // ));
    // this.marks.length = 0;

  }

  render() {


    return (
      <section id="map-page-right" onClick={() => (this.handleClick())}>
        <p className="auto"><input type="text" id="autoc" /></p>
        <p><a id="clear" href="">Click here</a> to clear map.</p>
      </section>
    )

  };
}


export default RouteMapRight;