import React, {Component } from 'react';


class ActivityFeedIndexItem extends Component {


  render() {
    let profilePicCollection = [camel, shark, turtle, bear, rabbit, squirrel]

    let profilePic = {
      backgroundSize: 'cover',
      backgroundImage: 'url(' + profilePicCollection[Math.floor(Math.random() * profilePicCollection.length)] + ')'
    };


    return (
      <div>
        <p>Index Item</p>
        <div>{this.props.comment.body}</div>
      </div>
    )
  };

  
}


export default ActivityFeedIndexItem;