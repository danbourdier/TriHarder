import {connect} from 'react-redux';
import Search from './search';

import { createRoute } from '../../actions/route_actions'
import { createComment } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {


  return {
    currentErrors: state.errors.routes,
    routes: state.entities.routes,
    currentUser: state.entities.users[state.session.id],
    lastRoute: Object.values(state.entities.routes)[Object.values(state.entities.routes).length - 1],
    shownRoute: state.entities.routes[Number(ownProps.match.params.routeId)],
  }

};

const mDTP = dispatch => ({
  createRoute: route => dispatch(createRoute(route)),
  createComment: comment => dispatch(createComment(comment))
});

export default connect(mSTP, mDTP)(Search)
