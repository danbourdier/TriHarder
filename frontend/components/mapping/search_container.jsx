import {connect} from 'react-redux';
import Search from './search';
import RouteMap from './route_map_main'

import { createRoute } from '../../actions/route_actions'
import { createComment } from '../../actions/comment_actions';

const mSTP = state => ({
  title: "",
  total_time: 0,
  activity: "",
  distance: 0,
  description: "",
  start_point: "",
  end_point: "",
  currentErrors: state.errors.routes,
  routes: state.entities.routes,
  currentUser: state.entities.users[state.session.id],
  lastRoute: Object.values(state.entities.routes)[Object.values(state.entities.routes).length - 1],
});

const mDTP = dispatch => ({
  createRoute: route => dispatch(createRoute(route)),
  createComment: comment => dispatch(createComment(comment))
});

export default connect(mSTP, mDTP)(Search)
