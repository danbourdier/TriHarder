import React from 'react';
import { Link } from 'react-router-dom';


class SplashPage extends React.Component{

  render() {
    return (
      <div className="outermost-splash-div">
        
        <div className="own-every-mile-div">
          <div className="bar-container">
            <hr class="bar"/> 
          </div>

          <h2 className="own-every-mile-container">
            <span>OWN EVERY MILE</span>
          </h2>

          <div className="bar-container2">
            <hr class="bar2" />
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

            <a href="https://play.google.com/store/apps/details?id=com.mapmyrun.android2&hl=en">
              <img src={window.linkedInBW} alt="linked in logo"/>
                <br />
              <strong>LinkedIn</strong>
            </a>
          </div>

        </div>
          ---------------------------------
          <br/><br/><br/>

        <div className="syncs-with-under-armour-smart-shoes-div">
          <h2>
            SYNCS WITH UNDER ARMOUR SMART SHOES
          </h2>
            <br/>
          <p>
            Track everything from pace, stride length, and cadence, plus get personalized coaching tips along the way.
          </p>
            <br/>
          <a href="https://www.underarmour.com/en-us/hovr/g/33yb?cid=MMF%7CREF%7CMMFitness%7CSite%7Chome_page%7CHOVR">LEARN MORE</a>
        </div>

          <br/><br/><br/>

        <div className="track-everything-div">
          <div className="track-everything-div-child">
            <span>TRACK EVERYTHING</span>
          </div>
            <br/>
          <span>
            Log any kind of workout using just your phone or with your favorite device like Garmin or Apple Watch.
          </span>
            <br/><br/>
          <span>GET SOCIAL</span>
            <br/>
          <span>
            Find support and motivation from other runners, plus create challenges for you and your friends.
          </span>
            <br/><br/>
          <span>TRAIN SMARTER</span>
            <br/>
          <span>
            Analyze your data in the app or on the web, then conquer that 5K or marathon using our adaptive training plans.
          </span>
            <br/><br/>
          <a href="https://www.mapmyrun.com/app">
            CHECK IT OUT
          </a>
        </div>

          <br/><br/><br/>

        <div>
          <span>FIND YOUR PATH ANYWHERE</span>
            <br/>
          <span>Create and discover new routes wherever you are. Save your favorites for the next time you're ready to run.</span>
            <br/>

            <div className="cities-div-child">
              <ul className="first-city-column-div">
                <a href="">New York, NY </a>
                <a href="">Manhattan, NY </a>
                <a href="">San Francisco, CA </a>
                <a href="">Austin, TX </a>
                <a href="">Denver, CO </a>
                <a href="">Seattle, WA </a>
              </ul>

              <ul className="second-city-column-div">
                <a href="">San Diego, CA </a>
                <a href="">Portland, OR </a>
                <a href="">Chicago, IL </a>
                <a href="">Honolulu, HI </a>
                <a href="">Tallahassee, FI </a>
                <a href="">Boston, MA </a>
              </ul>

              <ul className="third-city-column-div">
                <a href="">Dublin, Ireland </a>
                <a href="">Christchurch, New Zealand </a>
                <a href="">Vancouver, Canada </a>
                <a href="">Edinburgh, Scotland </a>
                <a href="">United States </a>
                <a href="">Find Your City </a>
              </ul>
            </div>

        </div>

          <br/><br/><br/>

        <div className="take-on-new-challenges-div">
          <div>
            <span>TAKE ON NEW CHALLENGES</span>
          </div>
            <br/>
          <div>
            <span>Think you can complete 1,020KM in 2020? Join the community challenge and compete to win exclusive gear.</span>
          </div>
            <br/>
          <div className="view-challenges-div-child"> 
            <a href="https://www.mapmyrun.com/challenges">VIEW CHALLENGES</a>
          </div>
        </div>

      </div>
    )
  };

}

export default SplashPage;