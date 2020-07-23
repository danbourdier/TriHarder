import { connect } from "react-redux"
import { getConnections, createConnection, deleteConnection } from '../../actions/connection_actions';

import FriendIndex from './friends_index';
import { withRouter } from "react-router-dom";

const mSTP = state => ({
  allConnections: state.entities.connections
})

const mDTP = dispatch => ({
  getConnections: () => dispatch(getConnections() ),
  createConnection: connection => dispatch(createConnection(connection)),
  deleteConnection: connectionId => dispatch(deleteConnection(connectionId))
})

export default withRouter(connect(mSTP, mDTP)(FriendIndex))