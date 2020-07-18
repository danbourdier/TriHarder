import React, {Component } from 'react';


class ActivityFeedIndexItem extends Component {


  render() {
    return (
      <div>
        <p>Index Item</p>
        <div>{this.props.comment.body}</div>
      </div>
    )
  };

  
}


export default ActivityFeedIndexItem;