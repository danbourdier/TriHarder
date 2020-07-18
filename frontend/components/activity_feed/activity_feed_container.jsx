import { connect } from 'react-redux';

import ActivityFeedIndex from './activity_feed_index';

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
  // action: () => dispatch(method())
});
 
export default connect(mSTP, mDTP)(ActivityFeedIndex);