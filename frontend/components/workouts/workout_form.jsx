import React, { Component } from 'react';

class WorkoutForm extends Component {

  render() {

    return (
      <div id="workout-form-container">
        <section id="workout-form-wrapper">
          
        <aside className="workout-form-left">
          <section className="workout-form-first-section">
            <h1>
              <strong>LOG A WORKOUT</strong> 
            </h1>
          </section>

          <section className="workout-form-second-section">
            <div id="ef-9r3f2"></div>
            <span>If you've been active, get credit for it! Add your workout 
              details below, and stay on top of your fitness goals.
            </span>
          </section>

          <section className="workout-form-third-section">
            <aside className="third-section-first-aside">
              <div className="first-aside-divs">
                <span>Workout Name</span>
                <input id="first-aside-first-input" type="text"/> 
              </div>
              <div className="first-aside-divs">
                <span>Date</span>
                <input id="first-aside-date-input" type="date" name=""/>
              </div>
            </aside>
            <aside className="third-section-second-aside">
              <span>Gear Used</span>
              <input id="first-aside-gear-input" type="text"/>
            </aside>
            <aside className="third-section-third-aside">
              <span>Start Time</span>
              <input id="first-aside-time-input"type="time"/>
            </aside>
            <aside className="third-section-fourth-aside">
              <span>How'd it go?</span>
              <textarea id="first-aside-description-input" cols="30" rows="10"></textarea>
            </aside>
          </section>

          <section className="workout-form-fourth-section"></section>
          <section className="workout-form-fifth-section"></section>
        </aside>

        {/* <aside className="workout-form-right">

        </aside> */}
      
        </section>
      </div>
    )
  }
}


export default WorkoutForm;