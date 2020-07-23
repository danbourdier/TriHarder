import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class FriendFinderIndex extends Component {

  render() {
    return (
      <div className="friend-index-component-container">
        <section className="friend-index-first-section">
          <article><Link to="/friends">MY CONNECTIONS</Link></article>
          <article id="friends-index-tab"><Link to="/find_friends">FIND CONNECTIONS</Link></article>
        </section>


      </div>
    )
  }

}

export default FriendFinderIndex;