import { connect } from 'react-redux';

import ActivityFeedIndex from './activity_feed_index';
import { createComment, getComments, deleteComment } from '../../actions/comment_actions';
import { getConnections } from '../../actions/connection_actions';

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id],
  comments: state.entities.comments,
  connections: state.entities.connections
});

const mDTP = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  getConnections: () => dispatch(getConnections()),
  getComments: () => dispatch(getComments()),
  deleteComment: id => dispatch(deleteComment(id)),
});

export default connect(mSTP, mDTP)(ActivityFeedIndex);