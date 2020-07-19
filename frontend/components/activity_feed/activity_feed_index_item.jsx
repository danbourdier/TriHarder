import React, {Component } from 'react';


class ActivityFeedIndexItem extends Component {


  render() {
    let profilePicCollection = [camel, shark, turtle, bear, squirrel]

    let profilePic = {
      backgroundSize: 'cover',
      backgroundImage: 'url(' + profilePicCollection[Math.floor(Math.random() * profilePicCollection.length)] + ')'
    };


    return (

      
        
        // <textarea value={this.state.body} id="status-update-text-box" cols="30" rows="10" onChange={this.update('body')}></textarea>
      


      <section className="create-comment-container">
        <aside id="status-update-pic" style={profilePic}></aside>
        <div>{this.props.comment.body}</div>
      </section>
    )
  };

  
}


export default ActivityFeedIndexItem;