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

    let {body, the_author, the_author_email} = this.props.comment;

    console.log(this.props.comment)
    return (
      <section className="create-comment-container">
        <aside id="status-update-pic" style={ the_author === this.props.currentUserId ? userProfilePic : profilePic }></aside>
        <div className="ec-comments-and-posts">
          <div>
            {the_author_email} <span className="delete-button">X</span>
          </div>
          {body}
        </div>
      </section>
    )
  };

  
}


export default ActivityFeedIndexItem;