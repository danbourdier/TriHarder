import { connect } from "react-redux"
import { getConnections, createConnection, deleteConnection, searchConnections } from '../../actions/connection_actions';

import FriendFinderIndex from './friend_finder_index';
import { withRouter } from "react-router-dom";

const mSTP = state => ({
  searchResults: state.entities.connections,
  currentUserConnections: Object.values(state.entities.users)[0].all_the_connections,
})

const mDTP = dispatch => ({
  getConnections: () => dispatch(getConnections()),
  searchConnections: email => dispatch(searchConnections(email)),
  createConnection: connection => dispatch(createConnection(connection)),
  deleteConnection: connectionId => dispatch(deleteConnection(connectionId)),
})

export default withRouter(connect(mSTP, mDTP)(FriendFinderIndex))