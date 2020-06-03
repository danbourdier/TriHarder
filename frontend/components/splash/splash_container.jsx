import React from 'react';
import { connect } from 'react-redux';

import SplashPage from './splash';

const mSTP = state => ({
  images: [],
});

const mDTP = dispatch => ({
  easterEgg: "",
});



export default connect(mSTP, mDTP)(SplashPage);