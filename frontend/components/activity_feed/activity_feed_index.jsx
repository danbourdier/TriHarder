import React from 'react';

import IndexItem from './activity_feed_index_item'

class ActivityFeedIndex extends React.Component {


  render() {
    let { createComment } = this.props;

    return (
      <div className="asdfg">
        uwavsdjsfdafdasdalufdgih
        <IndexItem createComment={createComment} />
      </div>
    )

  }
}




export default ActivityFeedIndex;