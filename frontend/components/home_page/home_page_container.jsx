import React from 'react';
import { connect } from 'react-redux';

import HomePageComponent from './home_page_component';

const mSTP = (state) => ({
  errors: state.errors.session,
  // currentUser: state.users[ownProps.match.params.userId],
});

const mDTP = (dispatch, ownProps) => ({
  processForm: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(HomePageComponent);

// i am attempting to connect three sub containers to this homepage