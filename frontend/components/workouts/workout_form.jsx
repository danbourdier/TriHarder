import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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
                   check: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (Object.values(prevProps.routes).length !== Object.values(this.props.routes).length) {
      this.setState({check: true})
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit() {
    let { activity, description, distance, title,
      total_time, start_point, end_point } = this.state;

    let newRoute = Object.assign({}, {
      'activity': activity,
      'distance': parseFloat(distance),
      'total_time': parseFloat(total_time),
      'title': title,
      'description': description,
      'start_point': start_point,
      'end_point': end_point,
      'user_id': this.props.currentUserId,
      'route_data': JSON.stringify([{ lat: 40.744661381538805, 
        lng: -73.98616038721435 }, { lat: 41.744661381538805, lng: -70.98616038721435 }])
    });

    this.props.createRoute(newRoute);
  }

  render() {
    if (this.state.check === true) {
      return <Redirect to="/home_page" />
    }

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
                <input id="first-aside-first-input" type="text" onChange={this.update('title')}/> 
              </div>
              <div className="first-aside-divs">
                <span>Date</span>
                <input id="first-aside-date-input" type="date"/>
              </div>
            </aside>
            <aside className="third-section-second-aside">

              <div>
                <span>Distance</span>
                <input id="first-aside-gear-input" type="text" placeholder="Please use decimal format (12.34)" onChange={this.update('distance')}/>
              </div>
              <div>
                <span>Total Time (Minutes)</span>
                <input id="first-aside-gear-input2" type="text" placeholder="Please use decimal format (12.34)" onChange={this.update('total_time')}/>
              </div>

            </aside>
            <aside className="third-section-third-aside">
              <div className="third-aside-points-wrapper">
                <div className="first-aside-divs">
                  <span>Start Point</span>
                  <input id="first-aside-time-input" placeholder="Please use an address" type="text" onChange={this.update('start_point')} />
                </div>

                <div className="first-aside-divs">
                  <span>End Point</span>
                  <input id="first-aside-time-input2"type="text" placeholder="Please use an address" onChange={this.update('end_point')}/>
                </div>
              </div>
              
            </aside>
            <aside className="third-section-fourth-aside">
              <span>How'd it go?</span>
              <textarea id="first-aside-description-input" cols="30" rows="10" onChange={this.update('description')}></textarea>
            </aside>
          </section>

          <section className="workout-form-fourth-section">
              <span>Activity</span>
              <select id="ec-selectore-245"
                name="activity"
                placeholder="Choose Activity"
                onChange={this.update('activity')}>
                
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
              <button id="fifth-section-button" onClick={this.handleSubmit} type="submit">LOG</button>
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