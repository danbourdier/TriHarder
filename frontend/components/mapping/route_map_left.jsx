import React, { Component } from "react";
import { createRoute } from "../../actions/route_actions";

class RouteMapLeft extends Component {
  constructor(props){
    super(props)
    // since our parent component is dependent on its child(this) to update it with use of #update
        // it would be redundant to create a state and deal with unexpected async issues
    this.points = this.props.pointsArray;
    this.handleClick = this.props.handleClick;
    this.flag = false;
    this.listener = this.listener.bind(this)
    this.actionButton = this.props.actionButton ? 'Edit Route' : 'Create Route!'

  }
 
  listener() {
    let that = this;
    let target = document.getElementById("ec-button-1249-submit");

    target.addEventListener("click", () => {
      that;

      if ((!Array.isArray(that.props.currentErrors)) && (Object.keys(that.props.currentErrors).length > 0)) {
        // console.log(that.props.currentErrors)
        if (that.props.currentErrors.responseText.includes("duplicate")) {
          return alert("Oh no! One or more route fields are not unique. Try changing the name of your route!")

        } else if (that.props.currentErrors.responseText.includes("Start point")) {
          return alert("Oh no! You forgot to use the map! Click anywhere to plot a point!")

        } else if (that.props.currentErrors.responseText.includes("End point")) {
          return alert("Oh no! You are missing an end point!")

        } else if (that.props.currentErrors.responseText.includes("Activity")) {
          return alert("Don't forget to choose an activity!")
        
        } else if (that.props.currentErrors.responseText.includes("Description")) {
          return alert("Description must be a minimum of 3 characters!")
      
        } else if (that.props.currentErrors.responseText.includes("blank")) {
          return alert("One of your fields are blank!")
        }
      }
    })
  }

  componentDidMount() {
    this.listener()
  }

  render() {
    let { activity, description, distance, title, 
        total_time, start_point, end_point, route_data } = this.props.thatState;
    
    let newRoute = Object.assign({}, {
      activity: activity,
      distance: parseFloat(distance),
      total_time: parseFloat(total_time),
      title: title,
      description: description,
      start_point: start_point,
      end_point: end_point,
      user_id: window.getState().entities.users[Number(Object.keys(window.getState().entities.users)[0])].id,
      route_data: JSON.stringify(route_data)
    });

    return (
      <section id="map-page-left">

            <span id="ec-js11232">Choose Map Location</span>
          <section id="map-page-left-first-section">
          
            <input id="ec-address" placeholder="Search Location"/>
            <button id="ec-pan-submit"type="submit">Search</button>
          </section>

          <section id="map-page-left-second-section">
            <span>Route Details:</span>
            <div id="route-map-left-details">
              <input id="route-map-left-details-title" placeholder="Enter Title Here" 
                      value={title}
                      onChange={this.props.update('title')}/> 

              <input id="route-map-left-details-title" placeholder="Enter Description Here"
                value={description}
                onChange={this.props.update('description')} /> 

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
            </div>
          </section>
          
          <section id="ec-button-1249-container">
            <button id="ec-button-1249-submit" type="submit" onClick={(this.handleClick(newRoute))} >{this.actionButton}</button>
          </section>

      </section>
    )

  };
}


export default RouteMapLeft;