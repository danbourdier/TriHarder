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
    // object destructing for DRY code
    let {total_time, distance, nullPoint, nullAllPoints} = this.props

    return (
      <section id="map-page-right" onClick={() => (this.handleClick())}>
        <div>{Number(distance).toFixed(2)}</div>
        {/* <div>{total_time} Minutes</div> */}
        <button onClick={nullAllPoints}>clear all points</button>
        <button onClick={nullPoint}>clear point</button>
          <strong>Points are not to exceed the "Z" point to not overload map requests</strong>
      </section>
    )

  };
}


export default RouteMapRight;