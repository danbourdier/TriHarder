import { connect } from 'react-redux';

import Footer from './footer';

const mSTP = state => ({
  currentUserId: state.session.id
});


export default connect(mSTP, null)(Footer);