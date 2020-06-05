import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPasswordMessage = props => (
    <div>
      <span>FORGOT YOUR PASSWORD?</span>
        <br/>
      <p>
        An email with a link to reset your Tri Harder account password has been sent to 
      </p>
      <p>{props.email}</p>
        <br/>
      <p>
      If you do not receive an email from us in the next few minutes, please make 
        sure you entered your address correctly and check your junk mail folder.
      </p>
        <br/>
      <p>If you need further assistance, please 
        <a href="https://support.mapmyfitness.com/hc/en-us">contact our support team.</a>
      </p>
        <br/>
      <Link to="/login">Back to Log In</Link>
    </div>
);

export default ForgotPasswordMessage;

