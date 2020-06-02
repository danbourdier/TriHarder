import React from 'react';
import { Link } from "react-router-dom";
 
class SessionFormLogin extends React.Component {
  constructor(props) {
    super(props)

    this.state = { email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  };

  handleSubmit(e) {
    e.preventDefault();
    return this.props.processForm(this.state)
  }

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <Link to="/signup">SIGN UP</Link>
          <br/>
          <a href="https://www.facebook.com/login.php">LOG IN WITH FACEBOOK</a>
          <br/>
          <p>OR</p>
          <label> Email
            <input type="text" value={this.state.email} onChange={this.update('email')}/>
          </label>
          <br/>
          <label> Password
            <input type="text" value={this.state.password} onChange={this.update('password')} />
          </label>
          <br />

          <p>Forgot Password? (TO BE A --LINK--)</p>

        </form>

      </div>
    )
  };
}

export default SessionFormLogin;