import React from 'react';
import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';
import ActivityFeedIndex from './activity_feed_index';

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
  action: () => dispatch(method())
});

export default connect(mSTP, mDTP)(ActivityFeedIndex);