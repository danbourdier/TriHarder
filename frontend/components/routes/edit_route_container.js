import { connect } from 'react-redux';

import { showRoute, deleteRoute, showRoutes } from '../../actions/route_actions';
import RouteShow from './route_show'
import { editRoute } from '../../util/route_api_util';

const mSTP = (state, ownProps) => ({
  // the below takes advantage of mSTP second argument under the hoos and allows 
  // access to our wildcard to use for our ingenious creations!
  route: state.entities.routes[Number(ownProps.match.params.routeId)],
  currentUser: state.entities.users[state.session.id],

})

const mDTP = dispatch => ({
  getRoutes: () => dispatch(showRoutes()),
  getRoute: route => dispatch(showRoute(route)),
  deleteRoute: routeId => dispatch(deleteRoute(routeId)),
  editRoute: route => dispatch(editRoute(route)),

});

export default connect(mSTP, mDTP)(RouteShow) 