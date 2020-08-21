import React, {Component} from 'react';

import Reply from './replies';

class FriendIndexItem extends Component {
  constructor(props) {
    super(props)
    this.state = { hiddenFlag: true, postBody: "" }

    this.authorId = this.props.currentUserId;
    this.authorEmail = this.props.authorEmail;
    this.createComment = this.props.createComment;
    this.deleteComment = this.props.deleteComment;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.hideAndShow = this.hideAndShow.bind(this);
  }

  hideAndShow() {
    this.setState({ hiddenFlag: (!this.state.hiddenFlag) })
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  componentDidUpdate(prevProps) {
    if ( prevProps.parent_comment_replies.length !== this.props.prevIndicator.parent_comment_replies.length ) {
      this.props.stateRefresh();
    }

  }

  handleSubmit() {
    let payload = Object.assign({},
      {
        'body': this.state.postBody,
        'author_email': this.authorEmail,
        'parent_comment_id':  this.props.theirComments.parent_comment === null ? 
          this.props.theirComments.comment.id : this.props.theirComments.parent_comment.id ,
        'author_id': this.authorId
      })

    this.createComment(payload);
  }

  handleClick(field) {
    return e => this.deleteComment(field) 
  }

  render() {

    let profilePicCollection = [camel, shark, turtle, bear, squirrel]

    let profilePic = {
      backgroundSize: 'cover',
      backgroundImage: 'url(' + profilePicCollection[Math.floor(Math.random() * profilePicCollection.length)] + ')'
    };
    // our function to provide inline-styling because i dont know how to use sass (yet)
    let userProfilePic = {
      backgroundSize: 'cover',
      backgroundImage: 'url(' + rabbit + ')'
    };

    const { theirComments } = this.props;

    // my attempt at hoisting
      // instantiated to develop logic in rendering delete button only for authored activity
    var deleteButtonMain;


    // let replyCollection = theirComments.replies.slice(0);
    // replyCollection[replyCollection.length] = theirComments.comment;
    let replyCollection = theirComments.parent_comment_replies;
    

    let replyIndex = !theirComments.parent_comment ? theirComments.replies.map(com => (
      <Reply key={com.id} reply={com} deleteReply={this.deleteComment} authorId={this.authorId} />)
    ) : replyCollection.map((com, i) => (
      <Reply key={i} reply={com} deleteReply={this.deleteComment} authorId={this.authorId} />)
    );

    let replies = this.state.hiddenFlag ? null : <section className="ec-comment-replies-section">
      {replyIndex}
      <form onSubmit={this.handleSubmit} className="ec-comment-reply-section-form">
        <aside id="reply-profile-pic" style={profilePic}></aside>
        <input type="text" placeholder="Write a Comment" value={this.state.postBody} onChange={this.update('postBody')} />
        <button id="reply-form-post-button" type="submit">POST</button>
      </form>
    </section>    
    

      // if a parent comment...
      if (theirComments.parent_comment === null) {

        deleteButtonMain = theirComments.comment.id === this.authorId ? 
          <span className="delete-button" onClick={ this.handleClick(theirComments.comment.id)  }>X</span> :
          null;

        return (
          <article className="create-comment-container">
            <article key={theirComments.comment.id} className="comment-friend-index-item" >
              <aside id="status-update-pic" style={profilePic}></aside>
                    <div className="ec-comments-and-posts">
                      <div id="ec-comment-first-section">
                        { theirComments.comment.author_email } { deleteButtonMain }
                      </div>
                      <span className="ec-comment-body">
                        {theirComments.comment.body}
                          </span>
    
                      <section className="ec-comments-last-section">
                        <div className="like-count">
                          <aside id="like-symbol"></aside>
                          <div>like count</div>
                        </div>
                        <div className="comment-count" onClick={this.hideAndShow}>
                          <aside id='comment-symbol'></aside>
                          <div>comment count</div>
                        </div>
                      </section>
    
                      { replies }
                    </div>
            </article>
          </article>
        )
        // if not a parent comment...
      } else {

        deleteButtonMain = theirComments.parent_comment.id === this.authorId ?
          <span className="delete-button" onClick={this.handleClick(theirComments.comment.id)}>X</span> :
          null;

        return (
          <article className="create-comment-container">
            <article key={theirComments.comment.id} className="comment-friend-index-item" >
              <aside id="status-update-pic" style={profilePic}></aside>
              <div className="ec-comments-and-posts">
                <div id="ec-comment-first-section">
                  {theirComments.parent_comment.author_email} { deleteButtonMain }
                </div>
                <span className="ec-comment-body">
                  {theirComments.parent_comment.body}
                </span>

                <section className="ec-comments-last-section">
                  <div className="like-count">
                    <aside id="like-symbol"></aside>
                    <div>like count</div>
                  </div>
                  <div className="comment-count" onClick={this.hideAndShow}>
                    <aside id='comment-symbol'></aside>
                    <div>comment count</div>
                  </div>
                </section>

                { replies }
              </div>
            </article>
          </article>
        )
      }
  };

}

export default FriendIndexItem