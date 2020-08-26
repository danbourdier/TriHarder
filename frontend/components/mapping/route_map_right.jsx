import React, { Component } from "react";

class RouteMapRight extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    // object destructuring for DRYer code
    let {total_time, distance, nullPoint, nullAllPoints} = this.props;

    return (
      <section id="map-page-right" >
        <div className="map-page-right-distance-container">
          <div style={{ fontSize: 11.25 + 'px' }}>
            DISTANCE
          </div>
          <div style={{fontSize: 24 + "px", fontFamily: "Arial"}}>{Number(distance).toFixed(2)}<span> &nbsp;MI</span>
          
          </div>
        </div>
        <section className="map-page-right-buttons-container">
          <button onClick={nullAllPoints}>Clear All Points</button>
          <button onClick={nullPoint}>Clear Last Point</button>
        </section>
          <strong>ToolTip</strong>
      </section>
    )

  };

}



export default RouteMapRight;