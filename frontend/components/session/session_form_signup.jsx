import React from 'react';
import { Link } from 'react-router-dom';

class SessionFormSignup extends React.Component {
  constructor(props) {
    super(props)

    this.state = { f_name: "", l_name: "", email: "", password: "", birth_date: "", gender: "", location: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState( { [field]: e.currentTarget.value  } )
  };

  handleSubmit(e) {
    e.preventDefault();
    return this.props.processForm(this.state);
  };

  render() {
    // let {} = this.state
    return (
      <div>
        
        <Link to="/login">LOG IN</Link>
        <br/>
        <a href="https://www.facebook.com/login.php">SIGN UP WITH FACEBOOK</a>
        <p>OR</p>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>First Name:
            <input type="text" value={this.state.f_name} onChange={this.update("f_name")} />
          </label>
          <br/>
          <label>Last Name:
            <input type="text" value={this.state.l_name} onChange={this.update("l_name")} />
          </label>
          <br />
          <label>Email:
            <input type="text" value={this.state.email} onChange={this.update("email")} />
          </label>
          <br />
          <label>Password:
            <input type="password" value={this.state.password} onChange={this.update("password")} />
          </label>
          <br />
          <label>Birth Date (TO BE SEPERATED INTO DD/MM/YYYY):
            <input type="text" value={this.state.birth_date} onChange={this.update('birth_date')} />
          </label>
          <br />
          <label>Male(CHECKBOX 1)
            <input type="checkbox" value={"Male"} onClick={this.update("gender")}/>
          </label>
          <label>Female(CHECKBOX 2)
            <input type="checkbox" value={"Female"} onClick={this.update("gender")} />
          </label>
          <br />
          <label>Location:
            <input type="text" value={this.state.location} onChange={this.update("location")} />
          </label>
          <br/>

          <button>{this.props.formType}</button>
        </form>

      </div>
    )
  };
}

export default SessionFormSignup;