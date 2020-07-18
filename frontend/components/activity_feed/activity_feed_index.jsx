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
        {/* uwavsdjsfdafdasdalufdgih */}
        {index}
      </div>
    )

  }
}




export default ActivityFeedIndex;