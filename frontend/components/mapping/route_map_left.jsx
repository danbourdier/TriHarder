import React, { Component } from "react";

class RouteMapLeft extends Component {
  constructor(props){
    super(props)


    this.points = this.props.pointsArray;
    this.handleClick.bind(this)
  }

  handleClick() {
    console.log("event target success")
    // this.points.forEach(point => (
    //   point.setMap(null)
    // ));
    // this.points.length = 0;
    
  }

  render() {


    return (
      <section id="map-page-left" onClick={() => (this.handleClick())}>
        <form>

          <aside>
            <div>Choose Map Location</div>
            <input placeholder="Search Location"/>
          </aside>

          <aside>
            <span>Route Name:</span>
            <input placeholder="Enter Title Here"/> 
          </aside>

          <aside>
            <span>Route Description:</span>
            <input placeholder="Enter Description Here"/> 
          </aside>

          <aside>
            <span>Activity Type:</span>
            <input placeholder="Choose Activity"/> 
          </aside>

          <aside>
            <button type="submit">Create Route!</button>
          </aside>

        </form>

      </section>
    )

  };
}


export default RouteMapLeft;