import {connect} from 'react-redux';
import Search from './search';

import { createRoute, editRoute } from '../../actions/route_actions'
import { createComment } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {


  return {
    currentErrors: state.errors.routes,
    routes: state.entities.routes,
    currentUser: state.entities.users[state.session.id],
    lastRoute: Object.values(state.entities.routes)[Object.values(state.entities.routes).length - 1],
    routeEditing: state.entities.routes[Number(ownProps.match.params.routeId)],
  }

};

const mDTP = dispatch => ({
  createRoute: route => dispatch(createRoute(route)),
  createComment: comment => dispatch(createComment(comment)),
  editRoute: route => dispatch(editRoute(route)),
});

export default connect(mSTP, mDTP)(Search)
