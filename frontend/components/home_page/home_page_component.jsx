import React from 'react';
import { connect } from 'react-redux';

// import { login } from '../../actions/session_actions';
import DashBoardContainer from '../dashboard/dashboard_container';
import ActivityFeedContainer from '../activity_feed/activity_feed_container';
import StatsContainer from '../stats/stats_container';


const HomePageComponent = props => (
  <div>
    <DashBoardContainer prop={props}/>
    <ActivityFeedContainer prop={props}/>
    <StatsContainer prop={props}/>
  </div>
);


export default HomePageComponent;