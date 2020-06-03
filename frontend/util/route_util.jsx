import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => ( // component 1
  <Route path={path} exact={exact} render={props => ( !loggedIn ? <Component {...props} /> : <Redirect to="/" /> )} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => ( // component 2
  <Route path={path} exact={exact} render={props => ( loggedIn ? <Component {...props} /> : <Redirect to="/login" /> )} />
);

const mapStateToProps = state => ({ // a mSTP function thats shared with the above 2 components. Allows us to create our turnary statement
  loggedIn: Boolean(state.session.id) // If the session id is valid then we render the component passed
}); 

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
