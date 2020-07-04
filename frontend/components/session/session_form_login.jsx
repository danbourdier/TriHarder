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
      <div className="session-form-login-body">

        <section className="session-form-login-container">

          <form className="session-form-login" onSubmit={this.handleSubmit}>
            <div className="session-form-signup-link">
              <Link to="/signup">SIGN UP</Link>
            </div>
            

           <button onClick={this.demoUser}>DEMO USER</button>

            <p>------------------------------------------------  OR  -------------------------------------------------</p>
            <label>
              <input type="text" value={this.state.email} placeholder="Email" onChange={this.update('email')}/>
            </label>
             <p className={emailError.length < 1 ? "error-hidden" : "error"}>{emailError}</p>

            <label>
              <input type="password" value={this.state.password} placeholder="Password" onChange={this.update('password')} />
            </label>
              <p className={passwordError.length < 1 ? "error-hidden" : "error"}>{passwordError}</p>

            <Link className="session-form-login-forgot-password" to="/login/forgot_password">Forgot Password?</Link>

            <button id="ec-login-1345" type="submit">{this.props.formType}</button>

          </form>

        </section>
      </div>
    )
  };
}

export default SessionFormLogin;