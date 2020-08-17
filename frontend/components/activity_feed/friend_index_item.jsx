import React, {Component} from 'react';

class FriendIndexItem extends Component {
  constructor(props) {
    super(props)
    this.state = { hiddenFlag: true, postBody: "" }

    this.createComment = this.props.createComment;
    this.handleSubmit = this.handleSubmit.bind(this);
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
    // our function to provide inline-styling because i dont know how to use sass
    let userProfilePic = {
      backgroundSize: 'cover',
      backgroundImage: 'url(' + rabbit + ')'
    };

    let replies = this.state.hiddenFlag ? null : <section className="ec-comment-replies-section">
      {/* {replyIndex} */}
      <form id="ex-920" onSubmit={this.handleSubmit} className="ec-comment-reply-section-form">
        <aside id="reply-profile-pic" style={profilePic}></aside>
        <input type="text" placeholder="Write a Comment" value={this.state.postBody} onChange={this.update('postBody')} />
        <button id="reply-form-post-button" type="submit">POST</button>
      </form>
    </section>

    let { everything, allComments } = this.props;

    let commentIndex = allComments.map((obj, i) => (
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
                  <div className="comment-count">
                    <aside id='comment-symbol'></aside>
                    <div>comment count</div>
                  </div>
                </section>

                { replies }
              </div>
      </article>
      
    ));
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