import React from 'react';
import { connect } from 'react-redux';

// import { login } from '../../actions/session_actions';
import RouteIndexContainer from '../routes/route_index_container'

const mSTP = (state, ownProps) => ({
  // errors: state.errors.session, 
  // formType: "LOG IN",
});

const mDTP = (dispatch, ownProps) => ({
  // processForm: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(RouteIndexContainer);