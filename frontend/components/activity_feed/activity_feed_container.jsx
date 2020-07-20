import { connect } from 'react-redux';

import ActivityFeedIndex from './activity_feed_index';
import { createComment, getComments, deleteComment } from '../../actions/comment_actions';

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id],
  comments: state.entities.comments,
});

const mDTP = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  getComments: () => dispatch(getComments()),
  deleteComment: id => dispatch(deleteComment(id)),
});

export default connect(mSTP, mDTP)(ActivityFeedIndex);