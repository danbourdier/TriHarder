import { connect } from 'react-redux';

import { showRoute, deleteRoute, showRoutes } from '../../actions/route_actions';
import RouteShow from './route_show'

const mSTP = (state, ownProps) => ({
  // the below takes advantage of mSTP second argument under the hoos and allows 
    // access to our wildcard to use for our ingenious creations!
    route: state.entities.routes[Number(ownProps.match.params.routeId)],
    routes: state.entities.routes,
    currentUser: state.entities.users[state.session.id],

})

const mDTP = dispatch => ({
  getRoutes: () => dispatch(showRoutes()),
  getRoute: route => dispatch(showRoute(route)),
  deleteRoute: routeId => dispatch(deleteRoute(routeId)),

});

export default connect(mSTP, mDTP)(RouteShow) 