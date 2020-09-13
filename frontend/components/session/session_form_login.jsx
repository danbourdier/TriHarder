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

    this.state = { email: "", emailError: "", password: "", passwordError: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
  };

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  };

  handleSubmit(e) {
    e.preventDefault();
    let payload = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.processForm(payload)
    this.setState({email: "", password: ""})
  };

  demoUser(e){
    e.preventDefault();
    let demo = { email: "demo@demo.com", password: "password" };
    this.props.logIn(demo);
  };

  render() {
    // let emailError = "";
    // let passwordError = "";
    let stateErrors = this.props.errors.responseJSON;

    if (stateErrors) {
      stateErrors.forEach(error => {
        if ((error.includes("Invalid")) && (this.state.emailError.length === 0)) {
          // emailError = error;
          this.setState({ emailError: error })
          // passwordError = error;
          this.setState({ passwordError: error })
        }

      });
    };

    let eErrorTag = (this.state.email.length > 0 || this.state.emailError.length === 0 )? 
      null : <p className="error">{this.state.emailError}</p>
    let pErrorTag = (this.state.password.length > 0 || this.state.passwordError.length === 0 ) ? 
      null : <p className="error">{this.state.passwordError}</p>

    

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
             {/* <p className={this.state.emailError.length < 1 ? "display-none" : "error"}>{this.state.emailError}</p> */}
             {eErrorTag}

            <label>
              <input type="password" value={this.state.password} placeholder="Password" onChange={this.update('password')} />
            </label>
              {pErrorTag}

            <Link className="session-form-login-forgot-password" to="/login/forgot_password">Forgot Password?</Link>

            <button id="ec-login-1345" type="submit">{this.props.formType}</button>

          </form>

        </section>
      </div>
    )
  };
}

export default SessionFormLogin;