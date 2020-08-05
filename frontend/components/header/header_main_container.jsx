import { connect } from 'react-redux';
import HeaderMain from './header_main';

const mSTP = state => ({
  currentUser: state.session.id
})

export default connect(mSTP, null)(HeaderMain)