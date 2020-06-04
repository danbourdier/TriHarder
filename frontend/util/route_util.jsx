import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn }) => ( // component 1
  <Route path={path} render={props => ( !loggedIn ? <Component {...props} /> : <Redirect to="/home_page" /> )} />
); // routes to our home_page if we are already logged in

const Protected = ({ component: Component, path, loggedIn }) => ( // component 2
  <Route path={path} render={props => ( loggedIn ? <Component {...props} /> : <Redirect to="/" /> )} />
);

const mapStateToProps = state => ({ // a mSTP function thats shared with the above 2 components. Allows us to create our turnary statement
  loggedIn: Boolean(state.session.id) // If the session id is valid then we render the component passed
}); 

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
