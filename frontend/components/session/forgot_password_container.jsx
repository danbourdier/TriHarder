import { connect } from 'react-redux';

import ForgotPasswordContent from './forgot_password_content';

const mSTP = state => ({

});

const mDTP = dispatch => ({
  action: () => dispatch(action())
});


export default connect(mSTP, mDTP)(ForgotPasswordContent);