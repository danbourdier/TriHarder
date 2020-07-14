import React, { Component } from "react";
import { createRoute } from "../../actions/route_actions";

class RouteMapLeft extends Component {
  constructor(props){
    super(props)
    // since our parent component is dependent on its child(this) to update it with use of #update
        // it would be redundant to create a state and deal with unexpected async issues
    this.points = this.props.pointsArray;
    this.handleClick = this.props.handleClick
    this.flag = false
  }

  componentDidMount() {
    let target = document.getElementById("ec-button-1249-submit")
    target.addEventListener("mouseout", () => {
      if (!Array.isArray(window.getState().errors.routes)) {

        return alert("bam")
      }
    })

  }

  render() {
    let { activity, description, distance, title, 
        total_time, start_point, end_point } = this.props.thatState
    
    let newRoute = Object.assign({}, {
      'activity': activity,
      'distance': parseFloat(distance),
      'total_time': parseFloat(total_time),
      'title': title,
      'description': description,
      'start_point': start_point,
      'end_point': end_point,
      'user_id': window.getState().entities.users[Number(Object.keys(window.getState().entities.users)[0])].id
    });

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

              {/* <option disabled >Choose an Activity</option> */}
              <option value="">Choose an Activity</option>
              <option value="Run">Run</option>
              <option value="Walk">Walk</option>
              <option value="Ruck">Ruck</option>
              <option value="Bike">Bike</option>
              <option value="Manic Sprint">Manic Sprint</option>
            </select>
          </aside>

          <aside>
            <button id="ec-button-1249-submit" type="submit" onClick={(this.handleClick(newRoute))} >Create Route!</button>
          </aside>

      </section>
    )

  };
}


export default RouteMapLeft;