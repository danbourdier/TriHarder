import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SplashContainer from './splash/splash_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import NavBarContainer from './navbar/navbar_container';
import HomePageContainer from './home_page/home_page_container';
import ForgotPasswordContainer from './session/forgot_password_container';
import ForgotPasswordMessage from './session/forgot_password_message';

const App = () => (
  <div className="render"> 
    <header className="header-container">
      <div className="header-main">

          {/* left */}
          <div className="logo-container">
            <img src={window.logoText} alt="logo"/>
          </div>
          {/* to contain a component for links */}
          <div className="link-container">
            <p className="link">Training</p>
            <p className="link">Routes</p>
            <p className="link">Challenges</p>
            <p className="link">Go MVP</p>
            <p className="link">Blog</p>
            <a href="https://https://www.linkedin.com/in/daniel-bourdier-17075194/in/daniel-bourdier-17075194/"> 
              <img src={window.linkedInBW} />LinkedIn
            </a>
          </div>
          {/* right */}
          <div className="auth-container">
            <div>
              <NavBarContainer />
            </div>  
          </div>
        
      </div>
        <div className="header-sub">
          <span className="covid-header-content" >Learn about TH's COVID-19 Pledge</span>
        </div>

    </header>

    <main className="body">
      <div className="body-components">
        <Switch>
          <AuthRoute exact path="/" component={SplashContainer} />
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/login/forgot_password" component={ForgotPasswordContainer} />
          <AuthRoute exact path="/forgot_password_message" component={ForgotPasswordMessage} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          <ProtectedRoute exact path="/home_page" component={HomePageContainer}/>
        </Switch>
      </div>
    </main>

    <footer className="footer">
          <section className="footer-first-section">
            <div className="top-footer-link-p">
              <p>
                Track every mile you run, connect your devices, and get closer 
                to your next PR.
              </p>
            </div>

            <nav className="top-footer-links">
              {/* ------------------------ */}
              <div className="top-footer-links-container">
                <a href="https://github.com/danbourdier">
                  <img src={window.gitBW} alt="git logo"/>
                  <strong>Git Hub</strong>
                </a>

                <a href="https://www.linkedin.com/in/daniel-bourdier-17075194/in/daniel-bourdier-17075194">
                  <img src={window.linkedInBW} alt="linked in logo"/>
                    <br />
                  <strong>LinkedIn</strong>
                </a>
              </div>
              {/*   ------------------------ */}
            </nav>
          </section>

            <nav className="top-footer">
              <section>
                <aside>
                  <img src={window.logoGrey} alt="logo" />
                </aside>
                <div>
                  <a href="">RUN</a>
                </div>
                <div>
                  <a href="">RIDE</a>
                </div>
                <div>
                <a href="">WALK</a>
                </div>
                <div>
                <a href="">HIKE</a>  
                </div>
              </section>
            </nav>

            <nav className="mid-footer">
              <section>
                <nav className="mid-footer-inner">
                  <div className="footer-social">
                    <h1>SOCIAL</h1>
                    <span>
                      <p>Like us on facebook</p>  
                      <p>Follow us on twitter</p>
                      <p>MayMyRun blog</p>
                    </span>
                  </div>

                  <div  className="footer-projects">
                    <h1>PROJECTS</h1>
                    <span>
                      <p>Log In / Register</p>
                      <p>Support</p>
                      <p>Developer / API</p>
                    </span>
                  </div>

                  <div  className="footer-skills">
                    <h1>SKILLS</h1>
                    <span>
                      <p>Advertise</p>
                      <p>Join Our Team</p>
                      <p>Shop Under Armor</p>
                    </span>
                  </div>

                  <aside className="jss1">
                    <p>TRI  FITNESS  COMMUNITY</p>
                    <div className="footer-mid-aside">
                      <div  className="splash-colly-booxes1">

                      </div>

                      <div  className="splash-colly-booxes2">

                      </div>

                      <div  className="splash-colly-booxes3">

                      </div>

                      <div  className="splash-colly-booxes4">

                      </div>
                    </div>
                  </aside>
                </nav>
              </section>
            </nav>

            <nav className="bottom-footer">

              <section>
                <aside>
                  <img src={window.logoBlack} alt="logo"/>
                </aside>

                <aside>
                  <div>

                  </div>

                  <div>

                  </div>
                </aside>
              </section>
              
            </nav>

    </footer>
  </div>
);

export default App;