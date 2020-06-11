import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

// import {login, signup, logout} from './util/session_api_util';
// import {createRoute} from "./util/route_api_util";
import { createRoute } from "./actions/route_actions";

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();
  if (window.currentUser) { // Our Bootstrap method
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  };
  
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.createRoute = createRoute();
  
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root)
});

// window testing 
// window.login = login;
// window.signup = signup;
// window.logout = logout;
