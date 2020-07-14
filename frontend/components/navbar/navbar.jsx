import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
  const sessionLinks = () => (

        <div className="auth-container-div" >
          <Link id="ec-link-123" to="/login">LOG IN</Link>
          <Link id="ec-link-246" to="/signup">SIGN UP</Link>
        </div>
  );
  const personalNavBar = () => (
    <div className="revealed-container-div">
      <div className="header-group">
          <h2 className="header-name"></h2>
          <section className="header-pic-dropdown-container-visible">
            <div className="header-button">Friends</div>
            <div className="header-button">Support</div>
            <div className="header-button">Profile and Settings</div>
            <div className="header-button" onClick={props.logout}>Log Out</div>
          </section>
      </div>
    </div>
  );

  return props.currentUser ? personalNavBar() : sessionLinks();
};


export default NavBar;
