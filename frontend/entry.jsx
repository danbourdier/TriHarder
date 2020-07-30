import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

  
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

  window.dispatch = store.dispatch;
  window.getState = store.getState

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

  // window.getConnections = getConnections;
  // window.deleteConnection = deleteConnection;

  // window.deleteConnectionRequest = deleteConnectionRequest;
  // window.getConnectionRequests = getConnectionRequests;
