import React, {Component } from 'react';


class ActivityFeedIndexItem extends Component {


  render() {
    let profilePicCollection = ['turtle.png', 'bear.png', 'rabbit.png', 'squirrel.png', 'camel.png']

    return (
      <div>
        <p>Index Item</p>
        <div>{this.props.comment.body}</div>
      </div>
    )
  };

  
}


export default ActivityFeedIndexItem;