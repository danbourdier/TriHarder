import React, { Component } from 'react';

import NavBarContainer from '../navbar/navbar_container';
import HeaderTabsContainer from './header_tabs_container';

class HeaderMain extends Component {

  render() {
    let turnaryElement = this.props.currentUser ? <div className="auth-container">
      <NavBarContainer />
      </div> : <div className="SESSION_HIDDEN-container"> <NavBarContainer /> </div>

    return (
      <header className="header-container">

        <div className="header-main">

          <div className="logo-container">
            <a href="#/">
              <img src={window.logoText} alt="logo" />
            </a>
          </div>

          <div className="link-container">
            <p className="ec-123-5-link">Training</p>
            <p className="ec-123-5-link">Routes</p>
            <a className="ec-123-5-link" href="https://github.com/danbourdier">GitHub</a>
            <a className="ec-123-5-link" href="https://angel.co/u/daniel-bourdier">AngelList</a>
            <a className="ec-123-5-link" href="https://twitter.com/BourdierDaniel">Twitter</a>
            <a href="https://www.linkedin.com/in/daniel-bourdier-17075194">
              <img src={window.linkedInBW} />LinkedIn
            </a>
          </div>

          { turnaryElement }
        </div>

        <section>
          <HeaderTabsContainer />
        </section>

      </header>
    )
    
  }

}

export default HeaderMain;