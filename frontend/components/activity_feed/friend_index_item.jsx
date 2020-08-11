import React, {Component} from 'react';

class FriendIndexItem extends Component {



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

    let { everything, allComments } = this.props;

    let commentIndex = allComments.map((obj, i) => (
      <div key={i} className="comment-friend-index-item" >
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

                {/* {replies} */}
              </div>
      </div>
      
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