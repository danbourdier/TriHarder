import React from 'react';

import IndexItem from './activity_feed_index_item'

class ActivityFeedIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = { body: "Add a Status Update Here..." }
  }

  update(field) {
    return e => this.setState( { [field]: e.target.currentValue } )
  }

  render() {
    let { createComment, comments } = this.props;
    let index = comments.map(comment => (
      <IndexItem key={comment.id} comment={comment} createComment={createComment} />
    ))
    let profilePic = {
      backgroundSize: 'cover',
      backgroundImage: 'url(' + turtle + ')'
    };

      // style={{ fontSize: 24 + "px", fontFamily: "Arial" }}

    return (
      <div id="activity-feed-container">
        <section className="create-comment-container">
          <aside id="status-update-pic" style={profilePic}></aside>
          <textarea name="" value={this.state.body} id="status-update-text-box" cols="30" rows="10" onChange={this.update('body')}></textarea>
        </section>

        <section className="other-comments-posts-container">
          {index}
        </section>
      </div>
    )

  }
}




export default ActivityFeedIndex;