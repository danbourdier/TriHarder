import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
  const sessionLinks = () => (

        <div className="auth-container-div" >
          <Link id="ec-link-123" to="/login">LOG IN</Link>
          <Link to="/signup">SIGN UP</Link>
        </div>
  );
  const personalNavBar = () => (
    <div className="revealed-container-div">
      <div className="header-group">
          <h2 className="header-name"> Drop down photo</h2>
          <section className="header-pic-dropdown-container">
            <div className="header-button">A div button</div>
            <div className="header-button">A div button</div>
            <div className="header-button">A div button</div>
            <div className="header-button">A div button</div>
            <div className="header-button" onClick={props.logout}>Log Out</div>
          </section>
      </div>
    </div>
  );

  return props.currentUser ? personalNavBar() : sessionLinks();
};


export default NavBar;
