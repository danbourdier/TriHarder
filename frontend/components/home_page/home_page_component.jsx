import React from 'react';
import { connect } from 'react-redux';

// import { login } from '../../actions/session_actions';
import DashBoardContainer from '../dashboard/dashboard_container';
import ActivityFeedContainer from '../activity_feed/activity_feed_container';
import StatsContainer from '../stats/stats_container';
import { Link } from 'react-router-dom';
 

const HomePageComponent = props => (
  <div className="homepage-body">
    <header className="homepage-body-header">
      <figure>
        Itty bitty magic box message
      </figure>
      <nav className="homepage-body-header-radios">
        <Link to="">
          <label>ACTIVITY FEED</label>
        </Link> 

        <Link to="">
          <label>MY DASHBOARD</label>
        </Link> 

        <Link to="">
          <label>STATS</label>
        </Link>
          

        {/* <input type="radio" name="dash_tabs"/>
        <input type="radio" name="dash_tabs"/>
        <input type="radio" name="dash_tabs"/> */}
      </nav>

    </header>
    <main className="homepage-body-inner-dashboard-container">

      <DashBoardContainer prop={props}/>
      

    </main>
      
  </div>
);


export default HomePageComponent;