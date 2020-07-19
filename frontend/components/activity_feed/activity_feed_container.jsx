import { connect } from 'react-redux';

import ActivityFeedIndex from './activity_feed_index';
import { createComment, getComments } from '../../actions/comment_actions';

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id],
  comments: state.entities.users[state.session.id].all_the_comments,
});

const mDTP = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  getComments: () => dispatch(getComments()),
});

export default connect(mSTP, mDTP)(ActivityFeedIndex);