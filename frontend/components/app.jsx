import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';

const App = () => (
  <div>
    <header>
      <h1> App page </h1>
      <h2>Future navbar component</h2>
    </header>
    
    <Switch>
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/signup" component={SignupFormContainer} />
    </Switch>

  </div>
);

export default App;