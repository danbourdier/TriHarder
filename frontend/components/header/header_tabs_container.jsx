import { connect } from 'react-redux';
import HeaderTabs from './header_tabs';

const mSTP = state => ({
  currentUser: state.session.id
})

export default connect(mSTP, null)(HeaderTabs)