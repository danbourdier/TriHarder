import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SplashContainer from './splash/splash_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import HomePageContainer from './home_page/home_page_container';
import ForgotPasswordContainer from './session/forgot_password_container';
import ForgotPasswordMessage from './session/forgot_password_message';
import FriendsContainer from './friends/friends_container';
import FriendFinderContainer from './friends/friend_finder_container';
import SearchContainer from './mapping/search_container';
import ActivityFeedContainer from './activity_feed/activity_feed_container';
import WorkOutFormContainer from './workouts/workout_container';
import HeaderMainContainer from './header/header_main_container';
import FooterContainer from './footer/footer_container';

const App = () => (
  <div className="render"> 

    <HeaderMainContainer />

    <main className="body">
      <div>
        <Switch>
          <AuthRoute exact path="/" component={SplashContainer} />
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/login/forgot_password" component={ForgotPasswordContainer} />
          <AuthRoute exact path="/forgot_password_message" component={ForgotPasswordMessage} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          <ProtectedRoute exact path="/home_page" component={HomePageContainer}/>
          <ProtectedRoute exact path="/map" component={SearchContainer} />
          <ProtectedRoute exact path="/activity_feed" component={ActivityFeedContainer} />
          <ProtectedRoute exact path="/friends" component={FriendsContainer} />
          <ProtectedRoute exact path="/find_friends" component={FriendFinderContainer} />
          <ProtectedRoute exact path="/create_workout" component={WorkOutFormContainer}/>
        </Switch>
      </div>
    </main>

    <FooterContainer />
  </div>
);

export default App;