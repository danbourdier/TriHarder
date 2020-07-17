import { connect } from 'react-redux';

import { showRoutes } from '../../actions/route_actions';
import RouteIndex from './route_index';

const mSTP = state => ({
  routes: Object.values(state.entities.routes),
  currentUser: state.entities.users
})

const mDTP = dispatch => ({
  showRoutes: () => dispatch(showRoutes())
});

export default connect(mSTP, mDTP)(RouteIndex) 