import React from 'react';

import IndexItem from './activity_feed_index_item'

class ActivityFeedIndex extends React.Component {


  render() {
    let { createComment, comments } = this.props;
    let index = comments.map(comment => (
      <IndexItem key={comment.id} comment={comment} createComment={createComment} />
    ))

    // console.log(comments);
    return (
      <div className="asdfg">
        <section className="create-comment-container">
          <aside id="status-update-pic"> Pic</aside>
          <textarea name="" id="status-update-text-box" cols="30" rows="10"></textarea>
        </section>

        {index}
      </div>
    )

  }
}




export default ActivityFeedIndex;