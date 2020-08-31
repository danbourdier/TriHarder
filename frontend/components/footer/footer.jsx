import React, { Component } from 'react';

class Footer extends Component {

  render() {

    return(
      <footer className={this.props.currentUserId ? "SESSION_HIDDEN-container" : "footer" }>
        <section className="footer-first-section">
          <div className="top-footer-link-p">
            <p>
              Track every mile you run, connect your devices, and get closer
              to your next PR.
              </p>
          </div>

          <nav className="top-footer-links">

            <div className="top-footer-links-container">
              <a href="https://github.com/danbourdier">
                <img src={window.gitBW} alt="git logo" />
                <strong>Git Hub</strong>
              </a>

              <a href="https://www.linkedin.com/in/danielbourdier/">
                <img src={window.linkedInBW} alt="linked in logo" />
                <br />
                <strong>LinkedIn</strong>
              </a>
            </div>

          </nav>
        </section>

        <nav className="top-footer">
          <section>
            <aside>
              <img src={window.logoGrey} alt="logo" />
            </aside>
            <div>
              <a>BIKE</a>
            </div>
            <div>
              <a>RUN</a>
            </div>
            <div>
              <a>RUCK</a>
            </div>
            <div>
              <a>FITNESS</a>
            </div>
          </section>
        </nav>

        <nav className="mid-footer">
          <section>
            <nav className="mid-footer-inner">
              <div className="footer-social">
                <h1>SOCIAL</h1>
                <span>
                  <p><a href="https://www.linkedin.com/in/danielbourdier/">Like me on LinkedIn</a></p>
                  <p><a href="https://github.com/danbourdier">Follow me on Github</a></p>
                  <p><a href="https://danbourdier.github.io/">Check out my portfolio!</a></p>
                </span>
              </div>

              <div className="footer-projects">
                <h1>PROJECTS</h1>
                <span>
                  <p><a href="https://danbourdier.github.io/CovidInteractiveBubbleChart/">Covid Int.Chart</a></p>
                  <p>More to Come!</p>
                  <p>More to Come!</p>
                </span>
              </div>

              <div className="footer-skills">
                <h1>SKILLS</h1>
                <span>
                  <p>Ruby on Rails</p>
                  <p>JavaScript</p>
                  <p><a href="https://danbourdier.github.io/">Click to see more!</a></p>
                </span>
              </div>

              <aside className="jss1">
                <p>TRI  FITNESS  COMMUNITY</p>
                <div className="footer-mid-aside">

                  <div className="splash-colly-booxes2">

                  </div>

                  <div className="splash-colly-booxes3">

                  </div>

                  <div className="splash-colly-booxes4">

                  </div>
                </div>
              </aside>
            </nav>
          </section>
        </nav>

        <nav className="bottom-footer">

          <section>
            <aside>
              <img src={window.logoBlack} alt="logo" />
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
    )
  }

}

export default Footer;
