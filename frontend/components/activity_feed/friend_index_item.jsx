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

    let commentIndex = allComments.map(obj => (
      <div key={obj.id}>
        <aside id="status-update-pic" style={profilePic}></aside>
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