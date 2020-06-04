import React from 'react';
import { Link } from 'react-router-dom';

class SessionFormSignup extends React.Component {
  constructor(props) {
    super(props)

    this.state = { first_name: "", last_name: "", email: "", password: "", birth_date: "", gender: "", location: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);

  }

  update(field) {
    return e => this.setState( { [field]: e.currentTarget.value  } )
  };

  handleSubmit(e) {
    e.preventDefault();
    return this.props.processForm(this.state); 
  };

  demoUser(e) {
    e.preventDefault();
    let demo = { email: "demo@demo.com", password: "password"};
    this.props.logIn(demo);
  };

  render() {
    let wam = this.props.errors.responseJSON;
    // let {} = this.state
    let firstError = "";
    let lastError = "";
    let emailError = "";
    let passwordError = "";
    let birthDateError = "";
    let genderError = "";
    let locationError = "";


    // console.log(this.props.errors.responseJSON)
    if (wam) {
      // debugger;
      wam.forEach(error => {
        if (error.includes("First")) {
          firstError = error
        } else if (error.includes("Last")) {
          lastError = error;
        } else if (error.includes("Last")) {
          lastError = error;
        } else if (error.includes("Email")) {
          emailError = error;
        } else if (error.includes("Birth")) {
          birthDateError = error;
        } else if (error.includes("Location")) {
          locationError = error;
        } else if (error.includes("Password")) {
          passwordError = error;
        }
      });

    };

    return (
      <div>
        
        <Link to="/login">LOG IN</Link>
          <br/><br/><br/>
        <button onClick={this.demoUser} >DEMO USER</button>
          <p>OR</p>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <label className="input-first-name">
            <input type="text" placeholder="First name" value={this.state.first_name} onChange={this.update("first_name")} />
          </label>
            <p className={firstError.length < 1 ? "error-hidden" : "error"}>{firstError}</p>
              <br/>
          <label className="input-last-name">
            <input type="text" placeholder="Last name" value={this.state.last_name} onChange={this.update("last_name")} />
          </label>
            <p className={lastError.length < 1 ? "error-hidden" : "error"}>{lastError}</p>
             <br />
          <label>
            <input type="text" placeholder="Email" value={this.state.email} onChange={this.update("email")} />
          </label>
            <p className={emailError.length < 1 ? "error-hidden" : "error"}>{emailError}</p>
              <br />
          <label>
            <input type="password" placeholder="Password" value={this.state.password} onChange={this.update("password")} />
          </label>
            <p className={passwordError.length < 1 ? "error-hidden" : "error"}>{passwordError}</p>
             <br />
          <label> {/* We dont need labels at this point*/}
            <input type="text" placeholder="Day" value={this.state.birth_date} onChange={this.update('birth_date')} />
          </label>
            <p className={birthDateError.length < 1 ? "error-hidden" : "error"}>{birthDateError}</p>
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
            <p className={locationError.length < 1 ? "error-hidden" : "error"}>{locationError}</p>
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