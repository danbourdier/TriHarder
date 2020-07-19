import React, {Component } from 'react';


class ActivityFeedIndexItem extends Component {


  render() {
    let profilePicCollection = [camel, shark, turtle, bear, squirrel]

    let profilePic = {
      backgroundSize: 'cover',
      backgroundImage: 'url(' + profilePicCollection[Math.floor(Math.random() * profilePicCollection.length)] + ')'
    };

    let userProfilePic = {
      backgroundSize: 'cover',
      backgroundImage: 'url(' + rabbit + ')'
    }


    return (
      
      <section className="create-comment-container">
        <aside id="status-update-pic" style={ this.props.comment.the_author === this.props.currentUserId ? userProfilePic : profilePic }></aside>
        <div>{this.props.comment.body}</div>
      </section>
    )
  };

  
}


export default ActivityFeedIndexItem;