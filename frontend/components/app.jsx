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
      <h1> TriHarder </h1>
      <NavBarContainer />
      <div className="covid-header-div">
       <h3 className="covid-header" >Learn about TH's COVID-19 Pledge</h3>
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