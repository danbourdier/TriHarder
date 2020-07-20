import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

import { createConnection } from './actions/connection_actions';

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
  window.createConnection = createConnection;

  window.userA = {'requester': 2, 'requestee': 4}
  // window.userB = {'requester': 2, 'requestee': 4}
  
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root)
  
});

// window testing 

// window.login = login;
// window.signup = signup;
// window.logout = logout;



// window.showRoute = showRoute;
// window.showRoutes = showRoutes;
// window.createRoute = createRoute;
// window.deleteRoute = deleteRoute;
// window.createComment = createComment;
// import {deleteComment} from './actions/comment_actions';
  // window.deleteComment = deleteComment