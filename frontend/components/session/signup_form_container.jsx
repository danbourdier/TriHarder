import React from 'react';
import { connect } from 'react-redux';

import { signup, login, wipeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = (state) => ({
  errors: state.errors.session,
  formType: "SIGN UP",
  
});

const mDTP = (dispatch) => ({
  processForm: user => dispatch(signup(user)),
  logIn: user => dispatch(login(user)),
  wipeErrors: () => dispatch(wipeErrors()),
});

export default connect(mSTP, mDTP)(SessionForm);