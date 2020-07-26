import React, {Component } from 'react';

import RepliesContainer from './replies_container';
import Reply from './replies';

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
    // references our window's instantiated images
    let profilePicCollection = [camel, shark, turtle, bear, squirrel]

    let profilePic = {
      backgroundSize: 'cover',
      backgroundImage: 'url(' + profilePicCollection[Math.floor(Math.random() * profilePicCollection.length)] + ')'
    };
    // our function to provide inline-styling because i dont know how to use sass
    let userProfilePic = {
      backgroundSize: 'cover',
      backgroundImage: 'url(' + rabbit + ')'
    }

    // this deconstructs our main comment
    const { body, the_author, the_author_email } = this.props.comment;
    // this deconstructs and provides direct access to our replies
    let { sub_comments } = this.props.comment;
    // this maps and renders our replies!
    let replyIndex = sub_comments.map(com => (
      <Reply key={com.id} reply={com} deleteReply={this.deleteComment} />
    ));

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
            <div className="like-count">likes</div>
            <div className="comment-count">
              <div>{this.props.comment.sub_comments.length}</div>
              <span>Comments</span> 
            </div>
          </section>

          <section className="ec-comment-replies-section">
            {/* <RepliesContainer /> */}
            { replyIndex }
            <form> {/* we need an onsubmit*/}
              <input type="text" placeholder="Write a Comment" value="state value here" /> {/*  */}
              <button type="submit">POST</button>
            </form>
          </section>
          
        </div>
      </article>
    )
  };

  
}


export default ActivityFeedIndexItem;