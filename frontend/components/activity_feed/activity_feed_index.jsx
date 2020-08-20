import React from 'react';

import IndexItem from './activity_feed_index_item'
import FriendIndexItem from './friend_index_item';

class ActivityFeedIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { body: "", ourCommentsOrTheirsFlag: true }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.email = this.props.currentUser.email;
    this.authorId = this.props.currentUser.id;
    this.createComment = this.props.createComment;
    this.friendFlip = this.friendFlip.bind(this);
  }


  componentDidMount() {
    this.props.getComments();
    this.props.getConnections();
  }

  componentDidUpdate(prevProps) {
    if (Object.values(prevProps.comments).length !== Object.values(this.props.comments).length) {
      this.props.getComments();
    }
    // if (Object.values(prevProps.comments).length !== Object.values(this.props.comments).length) {
    //   this.props.getComments();
    // }
  }

  friendFlip() {
    return this.setState({ourCommentsOrTheirsFlag: (!this.state.ourCommentsOrTheirsFlag)})
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

    this.createComment(payload)
  }


  render() {
    let { createComment, comments, deleteComment, connections } = this.props;
    let connectionCollection = [];
    let newConnectionCollection = [];

      Object.values(connections).map(connection => { 
        connectionCollection.push(...connection.all_the_user_comments)
      });
      // checking for uniqueness
      connectionCollection.forEach(con => { // if the collection below doesn't have an object with a key belonging to an iteration of the above collection then we push the entire object to a new collection
        if (newConnectionCollection.length > 0) {

          if (con.parent_comment) {
            if (  newConnectionCollection.some(el => ( (el.comment.id !== con.parent_comment.id) || (el.comment.id !== con.comment.id) ) )  ) {
              newConnectionCollection.push(con)
            }
          }
        } else {
          
          newConnectionCollection.push(con)
        }

      });
      // console.log(newConnectionCollection)
    let index = this.state.ourCommentsOrTheirsFlag ? Object.values(comments).map(comment => (
      <IndexItem key={comment.id} allComments={this.props.comments} authorEmail={this.email} comment={comment} createComment={createComment} deleteComment={deleteComment} currentUserId={this.authorId}/>
    )) : newConnectionCollection.map((connection, i) => { 
      // {parent_comment, comment, replies}
      return (
        <FriendIndexItem key={i} theirComments={connection} createComment={createComment} deleteComment={deleteComment} currentUserId={this.authorId} authorEmail={this.email} />
      )
    });

    let profilePic = {
      backgroundSize: 'cover',
      backgroundImage: 'url(' + rabbit + ')'
    };

    let postButtonContainer = this.state.body.length < 1 ? null : <aside className="create-comment-hidden-posting">
                                <button type="submit">POST</button>
                              </aside>
    return (
      <div id="activity-feed-container">
        <section className="create-comment-container">
          <form onSubmit={this.handleSubmit}>
            <div>
              <aside id="status-update-pic" style={profilePic}></aside>
              <textarea value={this.state.body} placeholder="Add a Status Update Here..." id="status-update-text-box" cols="30" rows="10" onChange={this.update('body')}></textarea>
            </div>

             { postButtonContainer }
          </form>
        </section>

        <div id="activity-index-activity-filter-container">
          <select name="flip" id="activity-index-activity-filter" onChange={this.friendFlip}> Friend Flip
            <option value="Friends">Myself</option>
            <option value="Myself">Friends</option>
          </select>
        </div>

        <section className="other-comments-posts-container">
          {index}
        </section>
      </div>
    )

  }
}




export default ActivityFeedIndex;