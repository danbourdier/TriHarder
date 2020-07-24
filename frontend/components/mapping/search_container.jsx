import {connect} from 'react-redux';
import Search from './search';
import RouteMap from './route_map_main'

import { createRoute } from '../../actions/route_actions'

const mSTP = state => ({
  title: "",
  total_time: 0,
  activity: "",
  distance: 0,
  description: "",
  start_point: "",
  end_point: "",
  currentErrors: state.errors.routes,

});

const mDTP = dispatch => ({
  createRoute: route => dispatch(createRoute(route))
});

export default connect(mSTP, mDTP)(Search)
