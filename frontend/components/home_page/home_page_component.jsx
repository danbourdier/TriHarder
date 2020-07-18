import React from 'react';
import { connect } from 'react-redux';



// import ActivityFeedContainer from '../activity_feed/activity_feed_container';
import StatsContainer from '../stats/stats_container';
import { Link } from 'react-router-dom';
import RouteIndexContainer from '../routes/route_index_container';
 

const HomePageComponent = props => (
  <div className="homepage-body">
    <section className="homepage-body-header">
      <div id="ecbannerblue">
        <figure>
          Changes are coming to this website!
        </figure>
      </div>

      <nav className="homepage-body-header-radios">
        <Link to="/activity_feed">
          <label>ACTIVITY FEED</label>
        </Link> 

        <Link to="">
          <label>MY DASHBOARD</label> 
        </Link> 

        <Link to="">
          <label>STATS</label>
        </Link>
          

       
      </nav>

    </section>
    <main className="homepage-body-inner-dashboard-container">

      <RouteIndexContainer prop={props}/>
      

    </main>
      
  </div>
);


export default HomePageComponent;