// import dispatch actions

import { connect } from "react-redux"

import FriendIndex from './friends_index';

const mSTP = state => {
  allConnections: state.connections
}

const mDTP = dispatch => {
  getConnections: () => dispatch(action())
}

export default connect(mSTP, mDTP)(FriendIndex)