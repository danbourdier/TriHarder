import React, {Component } from 'react';

import RepliesContainer from './replies_container';
import Reply from './replies';

class ActivityFeedIndexItem extends Component {
  constructor(props) {
    super(props)
    this.state = { hiddenFlag: true, postBody: "" }

    this.commentId = this.props.comment.id;
    this.authorId = this.props.currentUserId;
    this.deleteComment = this.props.deleteComment;
    this.createComment = this.props.createComment;
    this.authorEmail = this.props.authorEmail;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this)
  }

  componentDidMount() {
    let target = document.getElementsByClassName("comment-count")[0]
    if (target) {

      target.addEventListener("click", () => {
        if (this.state['hiddenFlag']) {
          this.flagFalse()
        } else {
          this.flagTrue()
        }
      })
    }
  }

  flagTrue() {
    return this.setState({ hiddenFlag: true })
  }

  flagFalse() {
    return this.setState({ hiddenFlag: false })
  }

  handleClick() {
    return this.deleteComment(this.commentId)
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value })
  }

  handleSubmit() {
    let payload = Object.assign({}, 
      {
        'body': this.state.postBody,
        'author_email': this.authorEmail,
        'parent_comment_id': this.commentId, 
        'author_id': this.authorId
      })

    this.createComment(payload)
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
    // this deconstructs and provides direct access to our replies that are a lower level key in each comment
    let { sub_comments } = this.props.comment;
    // this maps and renders our replies!
    let replyIndex = sub_comments.map(com => (
      <Reply key={com.id} reply={com} deleteReply={this.deleteComment} />
    ));

    if ( this.props.comment['parent_comment_id'] === null ) {

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
              <div className="like-count">
                <aside id="like-symbol"></aside>
                <div>{this.props.comment.sub_comments.length}</div>
              </div>
              <div className="comment-count">
                <aside id='comment-symbol'></aside>
                <div>{this.props.comment.sub_comments.length}</div>
              </div>
            </section>
  
            <section className={this.state['hiddenFlag'] ? "display-none" : "ec-comment-replies-section"}>
              { replyIndex }
              <form onSubmit={this.handleSubmit} className="ec-comment-reply-section-form">  {/* we need an onsubmit*/}
                <aside id="reply-profile-pic" style={profilePic}></aside>
                <input type="text" placeholder="Write a Comment" value={this.state.postBody} onChange={this.update('postBody')} /> {/*  */}
                <button id="reply-form-post-button" type="submit">POST</button>
              </form>
            </section>
            
          </div>
        </article>
      )
    } else {
      return (
        <div></div>
      )
    }
  };

  
}


export default ActivityFeedIndexItem;