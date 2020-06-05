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
  <div>
    <header>
      <div className="main-header">


        <div className="main-header-inner">
          {/* left */}
          <div className="main-header-logo-div">
            <img src={window.logoText} alt="logo"/>
          </div>
          {/* to contain a component for links */}
          <div className="main-header-links">
            <p className="main-header-links-each">Training</p>
            <p className="main-header-links-each">Routes</p>
            <p className="main-header-links-each">Challenges</p>
            <p className="main-header-links-each">Go MVP</p>
            <p className="main-header-links-each">Blog</p>
            <p className="main-header-links-each">Shop</p>
          </div>
          {/* right */}
          <div className="main-header-navbar-div">
            <NavBarContainer />
          </div>
        </div>


      </div>
        <div className="covid-header-div">
          <span className="covid-header-content" >Learn about TH's COVID-19 Pledge</span>
        </div>

    </header>

    <Switch>
      <AuthRoute exact path="/" component={SplashContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/login/forgot_password" component={ForgotPasswordContainer} />
      <AuthRoute exact path="/forgot_password_message" component={ForgotPasswordMessage} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/home_page" component={HomePageContainer}/>
    </Switch>
  </div>
);

export default App;