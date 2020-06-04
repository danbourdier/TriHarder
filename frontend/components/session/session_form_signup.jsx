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
        <button>DEMO USER</button>
        <p>OR</p>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" placeholder="First name" value={this.state.f_name} onChange={this.update("f_name")} />
          </label>
            <br/>
          <label>
            <input type="text" placeholder="Last name" value={this.state.l_name} onChange={this.update("l_name")} />
          </label>
            <br />
          <label>
            <input type="text" placeholder="Email" value={this.state.email} onChange={this.update("email")} />
          </label>
            <br />
          <label>
            <input type="password" placeholder="Password" value={this.state.password} onChange={this.update("password")} />
          </label>
            <br />
          <label> {/* We dont need labels at this point*/}
            <input type="text" placeholder="Day" value={this.state.birth_date} onChange={this.update('birth_date')} />
          </label>
          <label> {/* We dont need labels at this point*/}
            <input type="text" placeholder="Month" value={this.state.birth_date} onChange={this.update('birth_date')} />
          </label>
          <label> {/* We dont need labels at this point*/}
            <input type="text" placeholder="Year" value={this.state.birth_date} onChange={this.update('birth_date')} />
          </label>
            <br />
          <label>
            <input type="checkbox" placeholder="Male" value={"Male"} onClick={this.update("gender")}/>
          </label>
          <label>
            <input type="checkbox" placeholder="Female" value={"Female"} onClick={this.update("gender")} />
          </label>
            <br />
          <label>
            <input type="text" placeholder="Location" value={this.state.location} onChange={this.update("location")} />
          </label>
            <br/>
          <div>
            <input type="checkbox" /> <span>Yes, I would like to receive by email the latest news, innovation updates, and offers from MapMyRun and Under Armour.</span>
          </div>
            <br/>
          <div>
            <span>By signing up with TriHarder, you agree to our
              <a href="https://account.underarmour.com/en-us/privacy/">Privacy Policy</a>
              {' & '}
              <a href="">Terms of Use</a>
              { '.' }
            </span>
          </div>
            <br/>

          <button>{this.props.formType}</button>
        </form>

      </div>
    )
  };
}

export default SessionFormSignup;