import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

// import {login, signup, logout} from './util/session_api_util';
// import {createRoute} from "./util/route_api_util";
import { deleteRoute, showRoute, showRoutes, createRoute } from './actions/route_actions';
import {createComment} from "./util/comment_api_util";

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
  
  window.createComments = createComment
  
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root)
});

// window testing 
// window.login = login;
// window.signup = signup;
// window.logout = logout;
// window.dispatch = store.dispatch;

// window.showRoute = showRoute;
// window.showRoutes = showRoutes;
// window.createRoute = createRoute;
// window.deleteRoute = deleteRoute;
