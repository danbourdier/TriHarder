import {connect} from 'react-redux';
import Search from './search';

import { createRoute } from '../../util/route_api_util'

const mSTP = state => ({
  title: "",
  total_time: 0,
  activity: "",
  distance: 0,
  description: "",
  start_point: "",
  end_point: ""

});

const mDTP = dispatch => ({
  createRoute: route => dispatch(createRoute)
});

export default connect(mSTP, mDTP)(Search)