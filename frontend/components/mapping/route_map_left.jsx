import React, { Component } from "react";

class RouteMapLeft extends Component {
  constructor(props){
    super(props)


    this.points = this.props.pointsArray;
    this.handleClick.bind(this)
  }

  handleClick() {
    // console.log("event target success")
    // this.points.forEach(point => (
    //   point.setMap(null)
    // ));
    // this.points.length = 0;
  }

  render() {
    // debugger
    let { activity, description, distance, end_point, lastDistanceLeg, 
        lastLegDuration, start_point, title, total_time 
        } = this.props.thatState

    return (
      <section id="map-page-left">
        <form>

          <aside>
            <div>Choose Map Location</div>
            <input placeholder="Search Location"/>
          </aside>

          <aside>
            <span>Route Name:</span>
            <input  placeholder="Enter Title Here" 
                    value={title}
                    onChange={this.props.update('title')}/> 
          </aside>

          <aside>
            <span>Route Description:</span>
            <input placeholder="Enter Description Here" 
                  value={description} 
                  onChange={this.props.update('description')} /> 
          </aside>

          <aside>
            <span>Activity Type:</span>
            <select id="ec-selectore-123" name="activity" 
                    placeholder="Choose Activity" 
                    value={activity} 
                    onChange={this.props.update('activity')}>

              <option value="Run">Run</option>
              <option value="Walk">Walk</option>
              <option value="Ruck">Ruck</option>
              <option value="Bike">Bike</option>
              <option value="Manic Sprint">Manic Sprint</option>
            </select>
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