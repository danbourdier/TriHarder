import React from 'react';
import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = (state) => ({
  errors: state.errors.session, 
  formType: "LOG IN",
});

const mDTP = (dispatch) => ({
  logIn: user => dispatch(login(user)),
  processForm: user => dispatch(login(user)),
  wipeErrors: () => dispatch(wipeErrors())
});

export default connect(mSTP, mDTP)(SessionForm);