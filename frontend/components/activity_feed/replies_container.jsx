import { connect } from "react-redux";

import RepliesIndex from './replies_index';

const mSTP = state => ({
  replies: state.entities.comments
})

const mDTP = dispatch => ({
// code here
})

export default connect(mSTP, mDTP)(RepliesIndex)