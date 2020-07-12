import React, { Component } from "react";
import { createRoute } from "../../actions/route_actions";

class RouteMapLeft extends Component {
  constructor(props){
    super(props)

    // since our parent component is dependent on its child(this) to update it with use of #update
        // it would be redundant to create a state and deal with unexpected async issues
    this.points = this.props.pointsArray;
    // this.handleSubmit.bind(this)
  }

  // handleSubmit() {
  //   return createRoute()
  // }

  render() {
    
    let { createRoute, activity, description, distance, end_point, lastDistanceLeg, 
        lastLegDuration, start_point, title, total_time 
        } = this.props.thatState
    
    let newRoute = Object.assign({}, {
      'activity': activity,
      'distance': Number(distance),
      'total_time': Number(total_time),
      'title': title,
      'description': description
      // start_point: 
      // end_point: 
    });
    // debugger

    return (
      <section id="map-page-left">


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
            <select id="ec-selectore-123" 
                    name="activity" 
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
            <button type="submit" onClick={(newRoute) => (this.props.createRoute(newRoute))} >Create Route!</button>
          </aside>



      </section>
    )

  };
}


export default RouteMapLeft;