import { connect } from "react-redux"
import { getConnections, createConnection, deleteConnection, searchConnections, clearConnections } from '../../actions/connection_actions';
import { createConnectionRequest, getConnectionRequests } from "../../actions/connection_requests_actions";

import FriendFinderIndex from './friend_finder_index';
import { withRouter } from "react-router-dom"; 

const mSTP = state => ({
  searchResults: state.entities.connections,
  currentUserConnections: Object.values(state.entities.users)[0].all_the_connections,
  currentUser: Object.values(state.entities.users)[0],
  connectionRequests: state.entities.connectionRequests,
});

const mDTP = dispatch => ({
  getConnectionRequests: () => dispatch(getConnectionRequests()),
  clearConnections: () => dispatch(clearConnections()),
  createConnectionRequest: connection => dispatch(createConnectionRequest(connection)),
  getConnections: () => dispatch(getConnections()),
  searchConnections: email => dispatch(searchConnections(email)),
  createConnection: connection => dispatch(createConnection(connection)),
  deleteConnection: connectionId => dispatch(deleteConnection(connectionId)),
});

export default withRouter(connect(mSTP, mDTP)(FriendFinderIndex))