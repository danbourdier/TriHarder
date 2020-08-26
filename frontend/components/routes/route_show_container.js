import { connect } from 'react-redux';

import { showRoute, deleteRoute, showRoutes } from '../../actions/route_actions';
import Route from './route'

const mSTP = (state, ownProps) => {
  debugger
  // the below takes advantage of mSTP second argument under the hoos and allows 
    // access to our wildcard to use for our ingenious creations!
  return {
    route: state.entities.routes[Number(ownProps.match.params.routeId)],
    currentUser: state.entities.users[state.session.id]
  }

}

const mDTP = dispatch => ({


});

export default connect(mSTP, mDTP)(Route) 