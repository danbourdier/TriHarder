import React from 'react';
import { Redirect, Link } from 'react-router-dom';


class ForgotPasswordForm extends React.Component {
  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    <Redirect to="/" ></Redirect>

  };

  render() {

    return(
      <div>
        <span>No problem. Enter your email address and we’ll send you a link to reset it.</span>
          <br/><br/>
        
          <input type="text" placeholder="Email"/>
            <br/><br/>
          <Link to="/forgot_password_message">RESET PASSWORD</Link>
        
      </div>
    );

  };


}

export default ForgotPasswordForm;