import React, { Component } from 'react';

import NavBarContainer from '../navbar/navbar_container';
import HeaderTabsContainer from './header_tabs_container';
import { Link } from 'react-router-dom';

class HeaderMain extends Component {
  constructor(props) {
    super(props)

    this.state = { community: true, routes: true };

    this.flipCommunity = this.flipCommunity.bind(this);
    this.flipRoutes = this.flipRoutes.bind(this);
  }

  componentDidMount() {
    // let communityTargetOne = document.getElementById("uscn9138");
    // let communityTargetTwo = document.getElementById("uscn9138123");

    // communityTargetOne.addEventListener("mouseenter", () => {
    //   if (!this.state.routes) {
    //     this.flipRoutes()
    //   }
    //   this.flipCommunity();
    //   }
    // );

    // communityTargetTwo.addEventListener("mouseout", () => {
    //   this.flipCommunity();
    //   }
    // );

    // let routeTargetOne = document.getElementById("ji-8291")
    // let routeTargetTwo = document.getElementById("ji-8291765")

    // routeTargetOne.addEventListener("mouseenter", () => {
    //   if (!this.state.community) {
    //     this.flipCommunity()
    //   }
    //   this.flipRoutes();
    // }
    // );
    // routeTargetTwo.addEventListener("mouseout", () => {
    //   this.flipRoutes();
    // }
    // );

  }

  flipCommunity() {
    return this.setState({ community: (!this.state.community) })
  }
  flipRoutes() {
    return this.setState({ routes: (!this.state.routes) })
  }

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
            <section id="uscn9138" 
                     className="ec-123-5-link-community" 
                     onMouseEnter={this.flipCommunity} 
                     onMouseLeave={this.flipCommunity}><span>Community</span>
              <div  className={this.state.community ? "display-none" : "community-header-pic-dropdown-container-visible"}>
                <Link className="header-button" to="/friends">Friends</Link>
                <Link className="header-button" to="/activity_feed">Activity Feed</Link>
                <a className="header-button" href="https://www.linkedin.com/in/danielbourdier/">Import Talent</a>
              </div>
            </section>


            <section id="ji-8291" 
                     className="ec-123-5-link-routes"
                     onMouseEnter={this.flipRoutes}
                     onMouseLeave={this.flipRoutes}><span>Routes</span>
              <div className={this.state.routes ? "display-none" : "routes-header-pic-dropdown-container-visible"}>
                <Link className="header-button" to="/create_workout">Log Workout</Link>
                <Link className="header-button" to="/map">Map Route</Link>
              </div>
            </section>
              

            <a className="ec-123-5-link" href="https://github.com/danbourdier">GitHub</a>
            <a className="ec-123-5-link" href="https://angel.co/u/daniel-bourdier">AngelList</a>
            <a className="ec-123-5-link" href="https://twitter.com/BourdierDaniel">Twitter</a>
            <a href="https://www.linkedin.com/in/danielbourdier/">
              <img src={window.linkedInBW} />LinkedIn
            </a>
          </div>

          { turnaryElement }
        </div>

        {/* <section>
          <HeaderTabsContainer />
        </section> */}

      </header>
    )
    
  }

}

export default HeaderMain;