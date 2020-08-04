import React, { Component } from 'react';

class WorkoutForm extends Component {
  constructor(props) {
    super(props)

    this.state = { 'activity': "", 
                   'distance': 0, 
                   'total_time': 0, 
                   'title': "", 
                   'description': "", 
                   'start_point': "",
                   'end_point': "", 
                   'user_id': 0 
    };

  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }
  

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
              <span>Get credit for your workouts! Add your workout details below, 
                and stay on top of your goals.
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

          <section className="workout-form-fourth-section">
              <span>Activity</span>
              <select id="ec-selectore-245"
                name="activity"
                placeholder="Choose Activity">

                {/* <option disabled >Choose an Activity</option> */}
                <option value="">Choose an Activity</option>
                <option value="Run">Run</option>
                <option value="Walk">Walk</option>
                <option value="Ruck">Ruck</option>
                <option value="Bike">Bike</option>
                <option value="Manic Sprint">Manic Sprint</option>
              </select>
          </section>

          <section className="workout-form-fifth-section">
              <button id="fifth-section-button" type="submit">LOG</button>
          </section>
        </aside>

        {/* <aside className="workout-form-right">

        </aside> */}
      
        </section>
      </div>
    )
  }
}


export default WorkoutForm;