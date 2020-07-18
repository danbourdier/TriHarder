import { connect } from 'react-redux';

import ActivityFeedIndex from './activity_feed_index';
import { createComment } from '../../actions/comment_actions';

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id]

});

const mDTP = dispatch => ({
  createComment: comment => dispatch(createComment(comment))
});
 
export default connect(mSTP, mDTP)(ActivityFeedIndex);