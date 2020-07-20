import React, {Component } from 'react';


class ActivityFeedIndexItem extends Component {
  constructor(props) {
    super(props)
    this.commentId = this.props.comment.id;
    this.deleteComment = this.props.deleteComment;

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    return this.deleteComment(this.commentId)
  }

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

    let { body, the_author, the_author_email } = this.props.comment;


    return (
      <article className="create-comment-container">
        <aside id="status-update-pic" style={ the_author === this.props.currentUserId ? userProfilePic : profilePic }></aside>
        <div className="ec-comments-and-posts">
          <div id="ec-comment-first-section">
            {the_author_email} <span className="delete-button" onClick={ this.handleClick }>X</span>
          </div>
          <span className="ec-comment-body">
            {body}
          </span>
          <section className="ec-comments-last-section">
            <div className="like-count">1</div>
            <div className="comment-count">2</div>
          </section>

        </div>
      </article>
    )
  };

  
}


export default ActivityFeedIndexItem;