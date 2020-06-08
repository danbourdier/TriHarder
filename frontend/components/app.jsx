import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SplashContainer from './splash/splash_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import NavBarContainer from './navbar/navbar_container';
import HomePageContainer from './home_page/home_page_container';
import ForgotPasswordContainer from './session/forgot_password_container';
import ForgotPasswordMessage from './session/forgot_password_message';

const App = () => (
  <div className="render"> 
    <header className="header-container">
      <div className="header-main">

          {/* left */}
          <div className="logo-container">
            <img src={window.logoText} alt="logo"/>
          </div>
          {/* to contain a component for links */}
          <div className="link-container">
            <p className="link">Training</p>
            <p className="link">Routes</p>
            <p className="link">Challenges</p>
            <p className="link">Go MVP</p>
            <p className="link">Blog</p>
            <a href="https://https://www.linkedin.com/in/daniel-bourdier-17075194/in/daniel-bourdier-17075194/"> 
              <img src={window.linkedInBW} />LinkedIn
            </a>
          </div>
          {/* right */}
          <div className="auth-container">
            <div>
              <NavBarContainer />
            </div>  
          </div>
        
      </div>
        <div className="header-sub">
          <span className="covid-header-content" >Learn about TH's COVID-19 Pledge</span>
        </div>

    </header>

    <main className="body">
      <div className="body-components">
        <Switch>
          <AuthRoute exact path="/" component={SplashContainer} />
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/login/forgot_password" component={ForgotPasswordContainer} />
          <AuthRoute exact path="/forgot_password_message" component={ForgotPasswordMessage} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          <ProtectedRoute exact path="/home_page" component={HomePageContainer}/>
        </Switch>
      </div>
    </main>

  </div>
);

export default App;