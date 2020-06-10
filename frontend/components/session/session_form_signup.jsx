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



    if (wam) {

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
      <div className="session-form-signup-body">

        {/* <img className="session-form-signup-captcha" src={window.captcha} alt="captcha"/> */}

        <section className="session-form-signup-container">
        
          <Link className="session-form-login-link" to="/login">LOG IN</Link>
            
          <button onClick={this.demoUser} >DEMO USER</button>
          <div><aside className="signup-form-or-fancy"></aside><p>------------------------------------------------OR--------------------------------------------------</p><aside className="signup-form-or-fancy"></aside></div>
            
          {/* <h3>{this.props.formType}</h3> */}
          <form onSubmit={this.handleSubmit}>
            <div className="session-form-signup-inner">
              <label className="session-form-signup-input">
                <input type="text" placeholder="First name" value={this.state.first_name} onChange={this.update("first_name")} />
              </label>
                <p className={firstError.length < 1 ? "error-hidden" : "error"}>{firstError}</p>

              <label className="session-form-signup-input">
                <input type="text" placeholder="Last name" value={this.state.last_name} onChange={this.update("last_name")} />
              </label>
                <p className={lastError.length < 1 ? "error-hidden" : "error"}>{lastError}</p>

              <label className="session-form-signup-input">
                <input type="text" placeholder="Email" value={this.state.email} onChange={this.update("email")} />
              </label>
                <p className={emailError.length < 1 ? "error-hidden" : "error"}>{emailError}</p>

              <label className="session-form-signup-input">
                <input type="password" placeholder="Password" value={this.state.password} onChange={this.update("password")} />
              </label>
                <p className={passwordError.length < 1 ? "error-hidden" : "error"}>{passwordError}</p>

              <div className="session-form-signup-birthdate">

                <label className="session-form-signup-input-birth"> {/* We dont need labels at this point*/}
                  <input type="text" placeholder="Day" value={this.state.birth_date} onChange={this.update('birth_date')} />
                </label>
                  <p className={birthDateError.length < 1 ? "error-hidden" : "error"}>{birthDateError}</p>
                <label className="session-form-signup-input-birth"> {/* We dont need labels at this point*/}
                  <input type="text" placeholder="Month" value={this.state.birth_date} onChange={this.update('birth_date')} />
                </label>
                <label className="session-form-signup-input-birth"> {/* We dont need labels at this point*/}
                  <input type="text" placeholder="Year" value={this.state.birth_date} onChange={this.update('birth_date')} />
                </label>
                
              </div>

              <div className="session-form-signup-gender">
                <label>
                  <input type="radio" name="x" placeholder="Male" value={"Male"} onClick={this.update("gender")}/>
                </label>
                <label>
                  <input type="radio" name="x" placeholder="Female" value={"Female"} onClick={this.update("gender")} />
                </label>
              </div>
                

              <label>
                <input type="text" placeholder="Location" value={this.state.location} onChange={this.update("location")} />
              </label>
                <p className={locationError.length < 1 ? "error-hidden" : "error"}>{locationError}</p>

              <div>
                <input type="checkbox" /> <span>Yes, I would like to receive by email the latest news, innovation updates, and offers from MapMyRun and Under Armour.</span>
              </div>

              <div>
                <span>By signing up with TriHarder, you agree to our
                  <a href="https://account.underarmour.com/en-us/privacy/">Privacy Policy</a>
                  {' & '}
                  <a href="">Terms of Use</a>
                  { '.' }
                </span>
              </div>

            </div>


              <button>{this.props.formType}</button>
          </form>

        </section>

      </div>
    )
  };
}

export default SessionFormSignup;