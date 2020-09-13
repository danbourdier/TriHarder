import React from 'react';
import { Link } from 'react-router-dom';

class SessionFormSignup extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 
      first_name: "", firstNameError: "", last_name: "", lastNameError: "",
      email: "", emailError: "", password: "", passwordError: "", 
      birth_date: "", birthError: "", gender: "", genderError: "", location: "",
      locationError: "", day: "", dayError: "", month: "", monthError: "", 
      year: "", yearError: "" 
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);

  }

  update(field) {
    return e => this.setState( { [field]: e.currentTarget.value  } )
  };

  handleSubmit(e) {
    e.preventDefault();
    
    let birthDateRaw = this.state['month'] + "/" + this.state['day'] + "/" + this.state['year']

    let payload = Object.assign({}, {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      birth_date: birthDateRaw,
      gender: this.state.gender,
      location: this.state.location
    });

    return this.props.processForm(payload); 
    // this.setState({
    //   first_name: "", firstNameError: "", last_name: "", lastNameError: "",
    //   email: "", emailError: "", password: "", passwordError: "",
    //   birth_date: "", birthError: "", gender: "", genderError: "", location: "",
    //   locationError: "", day: "", dayError: "", month: "", monthError: "",
    //   year: "", yearError: ""
    // });
  };

  demoUser(e) {
    e.preventDefault();
    let demo = { email: "demo@demo.com", password: "password"};
    this.props.logIn(demo);
  };

  render() {
    let stateErrors = this.props.errors.responseJSON;
    let birthDateError = "";
    let genderError = "";
    let locationError = "";



    if (stateErrors) {

      stateErrors.forEach(error => {
        if ((error.includes("First")) && (this.state.firstNameError.length === 0)) {
          this.setState({ firstNameError: error })
        } else if ((error.includes("Last")) && (this.state.lastNameError.length === 0)) {
          this.setState({ lastNameError: error })
        } else if ((error.includes("Email")) && (this.state.emailError.length === 0)) {
          this.setState({ emailError: error })
        } else if ((error.includes("Birth")) && (this.state.birthError.length === 0)) {
          this.setState({ birthError: error })
        } else if ((error.includes("Location")) && (this.state.locationError.length === 0)) {
          this.setState({ locationError: error })
        } else if ((error.includes("Password")) && (this.state.passwordError.length === 0)) {
          this.setState({ passwordError: error })
        }
      });

    };

    //selector data
    let days = ["Day"]
      for (let i = 1; i < 32; i += 1) {
        days.push(i)
      };
    let dayIndex = days.map((day, i) => (
    <option key={i} value={day} >{day}</option>
      ))
    
    let months = ["Month", "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"]
    let monthIndex = months.map((month, i) => (
      <option key={i} value={month} >{month}</option>
    ))
    
    let yearsRaw = new Date()
      yearsRaw = yearsRaw.getFullYear();
    let yearIndex = ["Year"]
      for (let i = yearsRaw; i > 1899; i -=1) {
        yearIndex.push(i)
      }
      yearIndex = yearIndex.map((year, i) => (
        <option key={i} value={year}>{year}</option>
        )
      )

    let locations = ["Location", "Alabama",'Alaska','Arizona','Arkansas','California',
      'Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii',"Idaho",
      "IllinoisIndiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland",
      "Massachusetts","Michigan","Minnesota","Mississippi","Missouri","MontanaNebraska",
      "Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina",
      "North Dakota","Ohio","Oklahoma","Oregon","PennsylvaniaRhode Island","South Carolina",
      "South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington",
      "West Virginia","Wisconsin","Wyoming",
    ]

    let locationIndex = 
      locations.map((locale, i) => (
        <option key={i} value={locale}>{locale}</option>
      ))


    let fNError = (this.state.first_name.length > 0 || this.state.firstNameError.length === 0) ? 
      null : <p className="error">{this.state.firstNameError}</p>
    let lNError = (this.state.last_name.length > 0 || this.state.lastNameError.length === 0) ? 
      null : <p className="error">{this.state.lastNameError}</p>
    let eError = (this.state.email.length > 0 || this.state.emailError.length === 0) ? 
      null : <p className="error">{this.state.emailError}</p>
    let pError = (this.state.password.length > 0 || this.state.passwordError.length === 0) ? 
      null : <p className="error">{this.state.passwordError}</p>



    return (
      <div className="session-form-signup-body">

        <section className="session-form-signup-container">
        
          <Link className="session-form-login-link" to="/login">LOG IN</Link>
            
          <button onClick={this.demoUser} >DEMO USER</button>
          <div><aside className="signup-form-or-fancy"></aside><p>------------------------------------------------OR--------------------------------------------------</p><aside className="signup-form-or-fancy"></aside></div>
            
          <form onSubmit={this.handleSubmit}>
            <div className="session-form-signup-inner">
              <label className="session-form-signup-input">
                <input type="text" placeholder="First name" value={this.state.first_name} onChange={this.update("first_name")} />
              </label>
                {/* <p className={firstError.length < 1 ? "error-hidden" : "error"}>{firstError}</p> */}
                { fNError }

              <label className="session-form-signup-input">
                <input type="text" placeholder="Last name" value={this.state.last_name} onChange={this.update("last_name")} />
              </label>
                {/* <p className={lastError.length < 1 ? "error-hidden" : "error"}>{lastError}</p> */}
                { lNError }

              <label className="session-form-signup-input">
                <input type="text" placeholder="Email" value={this.state.email} onChange={this.update("email")} />
              </label>
                {/* <p className={emailError.length < 1 ? "error-hidden" : "error"}>{emailError}</p> */}
                { eError }

              <label className="session-form-signup-input">
                <input type="password" placeholder="Password" value={this.state.password} onChange={this.update("password")} />
              </label>
                {/* <p className={passwordError.length < 1 ? "error-hidden" : "error"}>{passwordError}</p> */}
                { pError }

              {/* birthdate selectors */}
              <div className="session-form-signup-birthdate">
                {/* day */}
                <label className="session-form-signup-input-birth"> {/* We dont need labels at this point*/}
                  <select name="days" placeholder="Day" value={this.state.day} onChange={this.update("day")}>
                  {dayIndex}
                  </select>
                </label>
                {/* month */}
                <label className="session-form-signup-input-birth"> {/* We dont need labels at this point*/}
                  <select id="month-selector" name="months" placeholder="Month" value={this.state.month} onChange={this.update("month")}>
                    {monthIndex}
                  </select>
                </label>
                {/* year */}
                <label className="session-form-signup-input-birth"> {/* We dont need labels at this point*/}
                  <select id="year-selector" name="years" placeholder="Year" value={this.state.year} onChange={this.update("year")}>
                    {yearIndex}
                  </select>
                </label>
                
              </div>
                  <p className={birthDateError.length < 1 ? "error-hidden" : "error"}>{birthDateError}</p>

              <div className="session-form-signup-gender">
                <label>
                  <input type="radio" name="x" value={"Male"} onClick={this.update("gender")}/>
                  <span>Male</span>
                </label>
                <label>
                  <input type="radio" name="x" value={"Female"} onClick={this.update("gender")} />
                  <span>Female</span>
                </label>
              </div>
                

              <label className='session-form-signup-location'>
                <select id="locations-selector" name="locations" placeholder="Location" value={this.state.location} onChange={this.update('location')}>
                  {locationIndex}
                </select>
              </label>
                <p className={locationError.length < 1 ? "error-hidden" : "error"}>{locationError}</p>

              <div className="session-form-signup-offer-checkbox">
                <div>

                  <input type="checkbox" onClick={() => (alert("Send me a message at www.linkedin.com/in/danielbourdier")) } /> <span>Yes, I would like to level up this developer, and message him on linkedIn!</span>
                </div>
              </div>

              <div className="session-form-signup-last-span">
                <span>By signing up with TriHarder, you agree to our
                  <a href="https://account.underarmour.com/en-us/privacy/"> Privacy Policy</a>
                  {' & '}
                  <a href="">Terms of Use</a>
                  { '.' }
                </span>
              </div>

            </div>


              <button className="session-form-signup-last-button">{this.props.formType}</button>
          </form>

        </section>

      </div>

    )

  };

}

export default SessionFormSignup;