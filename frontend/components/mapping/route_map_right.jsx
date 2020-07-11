import React, { Component } from "react";

class RouteMapRight extends Component {
  constructor(props) {
    super(props)
    // props = distance, nullPoint, nullAllPoints
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
    let {distance, nullPoint, nullAllPoints} = this.props

    return (
      <section id="map-page-right" onClick={() => (this.handleClick())}>
        <div>{Number(distance).toFixed(2)}</div>
        <button onClick={nullAllPoints}>clear all points</button>
        <button onClick={nullPoint}>clear point</button>
      </section>
    )

  };
}


export default RouteMapRight;