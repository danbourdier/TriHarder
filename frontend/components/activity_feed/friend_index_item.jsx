import React, {Component} from 'react';

class FriendIndexItem extends Component {



  render() {

    let { everything } = this.props;

    debugger
    // if (this.props.comment['parent_comment_id'] === null) {

      return (
        <article className="create-comment-container">
          <aside id="status-update-pic" style={the_author === this.props.currentUserId ? userProfilePic : profilePic}></aside>
          <div className="ec-comments-and-posts">
            <div id="ec-comment-first-section">
              Author Email <span className="delete-button">X</span>
            </div>
            <span className="ec-comment-body">
              Body goes here
            </span>

            <section className="ec-comments-last-section">
              <div className="like-count">
                <aside id="like-symbol"></aside>
                <div>like count</div>
              </div>
              <div className="comment-count">
                <aside id='comment-symbol'></aside>
                <div>like count</div>
              </div>
            </section>

            {replies}

          </div>
        </article>
      )
    // } else {
    //   return (
    //     <div></div>
    //   )

  }
}

export default FriendIndexItem