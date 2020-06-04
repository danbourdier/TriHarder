import React from 'react';
import { Link } from 'react-router-dom';

import ForgotPasswordForm from './forgot_password_form';

const ForgotPasswordContent = props => (
  <div>
    <span>FORGOT YOUR PASSWORD?</span>
      <br/><br/><br/>
    <div>
      <ForgotPasswordForm />
    </div>
      <br/>
    <Link to="/login">Back to Log In</Link>
  </div>
)


export default ForgotPasswordContent;