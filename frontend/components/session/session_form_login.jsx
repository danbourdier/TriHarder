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
            <br/>
          <label> Password
            <input type="password" value={this.state.password} onChange={this.update('password')} />
          </label>
            <br />
          <button type="submit">{this.props.formType}</button>
            <br/>
          <p>Forgot Password? (TO BE A --LINK--)</p>

        </form>

      </div>
    )
  };
}

export default SessionFormLogin;