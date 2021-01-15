import React from 'react';
import { Link } from 'react-router-dom';


class SplashPage extends React.Component{

  render() {
    return (
      <div className="outermost-splash-div">
        <nav className="own-every-mile-outer-div">
          <img className="first-splash-image" src={window.splash} alt="splash image" />

          <div className="own-every-mile-div">
              <div className="bar-container">
                <hr className="bar"/> 
              </div>

              <h2 className="own-every-mile-container">
                <span>OWN EVERY MOMENT</span>
              </h2>

              <div className="bar-container2">
                <hr className="bar2" />
              </div>

              <div className="splash-first-p-div">
                <p>The best mobile run tracking experience, backed by the world's largest digital health and fitness community.</p>
              </div>

              <div className="splash-signup-container">
                <Link to="/signup">SIGN UP</Link>
              </div>

              <div className="splash-login-container">
                <strong>Already a member?</strong>
                <div>
                  <Link to="/login">LOG IN</Link>
                </div>
              </div>


              <div className="splash-download-links-container">
                <a href="https://github.com/danbourdier">
                  <img src={window.gitBW} alt="git logo"/>
                  <strong>Git Hub</strong>
                </a>

              <a href="https://www.linkedin.com/in/danbourdier/">
                  <img src={window.linkedInBW} alt="linked in logo"/>
                    <br />
                  <strong>LinkedIn</strong>
                </a>
              </div>

          </div>
        </nav>

        <div className="track-everything-div-container">
              <figure className="splash-phone-back-drop-1">
              </figure>
          <div className="track-everything-div">
            
            
            <div className="track-everything-first-container">
              <div className="track-everything-first-paragraph-title-div">
                <span>TRACK EVERYTHING</span>
              </div>

              <span className="track-everything-first-paragraph-body-div">
                Log any kind of workout using just your phone or with your favorite device like Garmin or Apple Watch.
              </span>
            </div>

            <div className="track-everything-second-container">
              <span className="track-everything-second-paragraph-title-div">
                GET SOCIAL
              </span>

              <span className="track-everything-second-paragraph-body-div">
                Find support and motivation from other runners, plus create challenges for you and your friends.
              </span>
            </div>

            <div className="track-everything-third-container">
              <span className="track-everything-third-paragraph-title-div">
                TRAIN SMARTER
              </span>

              <span className="track-everything-third-paragraph-body-div">
                Analyze your data in the app or on the web, then conquer that 5K or marathon using our adaptive training plans.
              </span>
            </div>


            <div className="splash-check-it-out-div">
              <Link to="/login">CHECK IT OUT</Link>
            </div>
            
            <aside className="splash-muh-ali-container">
              <div className="splash-muh-ali-phone">

                <iframe className="splash-muh-ali" src="https://giphy.com/embed/xT9Igf2wBfQ8ClCDNC" frameBorder="0" allowFullScreen></iframe>
              </div>

              <div className="splash-second-phone">

              </div>
            </aside>


          </div>

        </div>

        <div className="find-your-path-anywhere-div">
          <div className="splash-gradient">
              <hr className="splash-find-your-path-bar"/>
            <div className="splash-annoying-div">
              <span>Trailblaze your own path</span>
            </div> 
              <hr className="splash-find-your-path-bar"/>

            <div className="splash-find-your-path-paragraph">
              <p>Discover and pave new routes</p>
              <p>wherever you are. Click any locale</p>
              <p>below to start!</p>
            </div>
              <br/>

              <div className="splash-cities-div">
                <ul className="first-city-column-div">
                  <Link to="/login">New York, NY </Link>
                  <Link to="/login">Manhattan, NY </Link>
                  <Link to="/login">San Francisco, CA </Link>
                  <Link to="/login">Austin, TX </Link>
                  <Link to="/login">Denver, CO </Link>
                  <Link to="/login">Seattle, WA </Link>
                </ul>

                <ul className="second-city-column-div">
                  <Link to="/login">San Diego, CA </Link>
                  <Link to="/login">Portland, OR </Link>
                  <Link to="/login">Chicago, IL</Link>
                  <Link to="/login">Honolulu, HI </Link>
                  <Link to="/login">Tallahassee, FI </Link>
                  <Link to="/login">Boston, MA </Link>
                </ul>

                <ul className="third-city-column-div">
                  <Link to="/login">Christchurch, New Zealand </Link>
                  <Link to="/login">Vancouver, Canada </Link>
                  <Link to="/login">Edinburgh, Scotland </Link>
                  <Link to="/login">United States </Link>
                  <Link to="/login">Find Your City </Link>
                </ul>
              </div>
          </div>

            

        </div>

        <div className="splash-flag-waving">
          <div className="flag-wave-ec1">
            <img src={window.flag} alt="Ol flag"/>
            <img src={window.flag} alt="Ol flag"/>
            <img src={window.flag} alt="Ol flag"/>
            <img src={window.flag} alt="Ol flag"/>
            <img src={window.flag} alt="Ol flag"/>
            <img src={window.flag} alt="Ol flag"/>
            <img src={window.flag} alt="Ol flag"/>
            <img src={window.flag} alt="Ol flag"/>
            <img src={window.flag} alt="Ol flag"/>
            <img src={window.flag} alt="Ol flag"/>
            <img src={window.flag} alt="Ol flag"/>
            <img src={window.flag} alt="Ol flag"/>
            <img src={window.flag} alt="Ol flag"/>
            <img src={window.flag} alt="Ol flag"/>
            <img src={window.flag} alt="Ol flag"/>
          </div>
          
          <div className="flag-wave-ec1">
            <img src={window.flag} alt="Ol flag"/>
            <img src={window.flag} alt="Ol flag"/>
            <img src={window.flag} alt="Ol flag"/>
            <img src={window.flag} alt="Ol flag"/>
            <img src={window.flag} alt="Ol flag"/>
            <img src={window.flag} alt="Ol flag"/>
            <img src={window.flag} alt="Ol flag"/>
            <img src={window.flag} alt="Ol flag"/>
            <img src={window.flag} alt="Ol flag"/>
            <img src={window.flag} alt="Ol flag"/>
            <img src={window.flag} alt="Ol flag"/>
            <img src={window.flag} alt="Ol flag"/>
            <img src={window.flag} alt="Ol flag"/>
            <img src={window.flag} alt="Ol flag"/>
            <img src={window.flag} alt="Ol flag"/>
            <img src={window.flag} alt="Ol flag"/>
          </div>

        </div>
        
        
        <section className="take-on-new-challenges-div">

          <div className="take-on-new-challenges-div-inner">

            <hr className="splash-take-on-new-challenges-bar" />
            <div className="take-on-new-challenges-title">
              <span>#HIRE A VETERAN</span>
            </div>
            <hr className="splash-take-on-new-challenges-bar" />

            <div className="take-on-new-challenges-p">
              <span>Join the challenge. Enjoy benefits such as tax-incentives, cost-savings on 
                un-required employee health care, and <p> </p>
                <a href="https://smallbiztrends.com/2017/03/benefits-of-hiring-veterans.html#comments">more</a>.
              </span>
            </div>


            <div className="splash-view-challenges-div"> 
              <a href="https://www.linkedin.com/in/danbourdier/">TAKE CHALLENGE</a>
            </div>

          </div>

        </section>

      </div>
    )
  };

}

export default SplashPage;