import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class HeaderTabs extends Component {

  render() {
    return(       
      <div className={this.props.currentUser ? "header-mid-component" : "header-mid-hidden" }>
        <nav className="header-nav-container">

          <section className="header-nav-tab">
            <Link to="/map">Create Route</Link> 
          </section>
            {/* split */}
          <section className="header-nav-tab">
            <Link to="/create_workout">Log Workout</Link>
          </section>
            {/* split */}
          <section className="header-nav-tab">
            <a href="https://www.linkedin.com/in/danbourdier/">Import Talent</a>
          </section>
            {/* split */}
          <section className="header-nav-tab">
            <Link to="/create_goal">Create a Goal</Link>
          </section>

        </nav>
      </div>
      
    )
  };


}



export default HeaderTabs;