import React from 'react';

import IndexItem from './activity_feed_index_item'

class ActivityFeedIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { body: "" }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.email = this.props.currentUser.email;
    this.authorId = this.props.currentUser.id;
    this.createComment = this.props.createComment;
  }

  componentDidMount() {
    this.props.getComments();

  }

  update(field) {
    return e => this.setState( { [field]: e.currentTarget.value } )
  }

  handleSubmit() {
    let payload = Object.assign({}, {
      'author_email': this.email,
      'body': this.state.body,
      'author_id': this.authorId
    });

    // console.log(payload)
    this.createComment(payload)
  }


  render() {
    let { createComment, comments, deleteComment } = this.props;
    let index = Object.values(comments).map(comment => (
      <IndexItem key={comment.id} comment={comment} createComment={createComment} deleteComment={deleteComment} currentUserId={this.authorId}/>
    ))
    let profilePic = {
      backgroundSize: 'cover',
      backgroundImage: 'url(' + rabbit + ')'
    };

    // console.log(this.props.actualComment);

    return (
      <div id="activity-feed-container">
        <section className="create-comment-container">
          <form onSubmit={this.handleSubmit}>
            <aside id="status-update-pic" style={profilePic}></aside>
            <textarea value={this.state.body} placeholder="Add a Status Update Here..." id="status-update-text-box" cols="30" rows="10" onChange={this.update('body')}></textarea>
            <input type="submit" value="Submit Post!"/>
          </form>
        </section>

        <section className="other-comments-posts-container">
          {index}
        </section>
      </div>
    )

  }
}




export default ActivityFeedIndex;