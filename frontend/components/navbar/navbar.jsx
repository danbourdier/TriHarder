import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">LOGIN</Link>
      <Link to="/signup">SIGN UP</Link>
    </nav>
  );
  const personalNavBar = () => (
    <hgroup className="header-group">
      <div>
        <h2 className="header-name"> (future drop-down) {props.currentUser.username}</h2>
        <button className="header-button" onClick={props.logout}>Log Out</button>
      </div>
    </hgroup>
  );

  return props.currentUser ? personalNavBar() : sessionLinks();
};


export default NavBar;
