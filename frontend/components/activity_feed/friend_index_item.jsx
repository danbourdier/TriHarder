import React, {Component} from 'react';

import Reply from './replies';

class FriendIndexItem extends Component {
  constructor(props) {
    super(props)
    this.state = { hiddenFlag: true, postBody: "" }

    this.createComment = this.props.createComment;
    this.deleteComment = this.props.deleteComment;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.hideAndShow = this.hideAndShow.bind(this);
  }

  hideAndShow() {
    this.setState({ hiddenFlag: (!this.state.hiddenFlag) })
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit() {
    let payload = Object.assign({},
      {
        'body': this.state.postBody,
        // 'author_email': this.authorEmail,
        // 'parent_comment_id': this.commentId,
        // 'author_id': this.authorId
      })

    this.createComment(payload);
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



    let replyIndex = (obj) => (obj.map((com, i) => (
      <Reply key={i} reply={com} deleteReply={this.deleteComment} />)
    ));

    let replies = (replyIndexParam) => this.state.hiddenFlag ? null : <section className="ec-comment-replies-section">
      {replyIndex(replyIndexParam)}
      <form onSubmit={this.handleSubmit} className="ec-comment-reply-section-form">
        <aside id="reply-profile-pic" style={profilePic}></aside>
        <input type="text" placeholder="Write a Comment" value={this.state.postBody} onChange={this.update('postBody')} />
        <button id="reply-form-post-button" type="submit">POST</button>
      </form>
    </section>
    // all comments are the comments belonging to each of our connections
    // this includes their originals and replies to other posts
    const { allComments } = this.props;
    // because we are passing each object that contains a collection of their activity
      // we need to learn how to filter it on our end below
    let commentIndex = allComments.map((obj, i) => {

      
      // if a parent comment...
      if (obj.parent_comment === null) {

        return (
          <article key={i} className="comment-friend-index-item" >
            <aside id="status-update-pic" style={profilePic}></aside>
                  <div className="ec-comments-and-posts">
                    <div id="ec-comment-first-section">
                      {obj.comment.author_email}
                    </div>
                    <span className="ec-comment-body">
                      {obj.comment.body}
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
  
                    { replies(obj.replies) }
                  </div>
          </article>
        )
        // if not a parent comment...
      } else {

        let { parent_comment, comment } = obj;
        let replyCollection = obj.replies;
          replyCollection[replyCollection.length] = comment;
        
        return (
          <article key={i} className="comment-friend-index-item" >
            <aside id="status-update-pic" style={profilePic}></aside>
            <div className="ec-comments-and-posts">
              <div id="ec-comment-first-section">
                {parent_comment.author_email}
              </div>
              <span className="ec-comment-body">
                {parent_comment.body}
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

              {replies(replyCollection)}
            </div>
          </article>
        )
      }
    });

    // below returns our render's return
    // if (this.props.comment['parent_comment_id'] === null) {
      return (
        <article className="create-comment-container">

          { commentIndex }
        </article>
      )
    // } else {
    //   return (
    //     <div></div>
    //   )

  }
}

export default FriendIndexItem