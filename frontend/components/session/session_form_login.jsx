import React from 'react';
import {
  Link, Redirect, BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useLocation 
} from "react-router-dom";

 
class SessionFormLogin extends React.Component {
  constructor(props) {
    super(props)

    this.state = { email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
  };

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  };

  handleSubmit(e) {
    e.preventDefault();
    
    this.props.processForm(this.state)
  };

  demoUser(e){
    e.preventDefault();
    let demo = { email: "demo@demo.com", password: "password" };
    this.props.logIn(demo);
  };

  render() {
    let wam = this.props.errors.responseJSON;
    // let {} = this.state
    let emailError = "";
    let passwordError = "";

    if (wam) {
      wam.forEach(error => {
        if (error.includes("Invalid")) {
          emailError = error;
          passwordError = error;
        }

      });
    };

    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <Link to="/signup">SIGN UP</Link>
            <br/>
         <button onClick={this.demoUser}>DEMO USER</button>
            <br/>
          <p>OR</p>
          <label> Email
            <input type="text" value={this.state.email} onChange={this.update('email')}/>
          </label>
           <p className={emailError.length < 1 ? "error-hidden" : "error"}>{emailError}</p>
            <br/>
          <label> Password
            <input type="password" value={this.state.password} onChange={this.update('password')} />
          </label>
            <p className={passwordError.length < 1 ? "error-hidden" : "error"}>{passwordError}</p>
              <br />
          <Link to="/login/forgot_password">Forgot Password?</Link>
            <br/>
          <button type="submit">{this.props.formType}</button>
            <br/>

        </form>

      </div>
    )
  };
}

export default SessionFormLogin;