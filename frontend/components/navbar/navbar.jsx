import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import PhotoDropDown from './personalNavBar';







// const lazyLoad = () => {
//   window.setTimeout(targetFlip, 2 * 2000);
// }

// lazyLoad()


const NavBar = props => {
  const sessionLinks = () => (

        <div className="auth-container-div" >
          <Link id="ec-link-123" to="/login">LOG IN</Link>
          <Link id="ec-link-246" to="/signup">SIGN UP</Link>
        </div>
  );

  const personalNavBar = () => (
    <PhotoDropDown {...props} />
  );


  
  return props.currentUser ? personalNavBar() : sessionLinks();
};


export default NavBar;
