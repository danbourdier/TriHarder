import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
  const sessionLinks = () => (
    <div className="auth-container-outer-div">
      <nav className="login-signup">
        <div className="auth-container-div" >
          <Link id="ec-link-123" to="/login">LOG IN</Link>
          <Link to="/signup">SIGN UP</Link>
        </div>
      </nav>
    </div>
  );
  const personalNavBar = () => (
    <div className="auth-container-div">
      <hgroup className="header-group">
        <div>
          <h2 className="header-name"> (future drop-down) {props.currentUser.username}</h2>
          <button className="header-button" onClick={props.logout}>Log Out</button>
        </div>
      </hgroup>
    </div>
  );

  return props.currentUser ? personalNavBar() : sessionLinks();
};


export default NavBar;
