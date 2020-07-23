import React, { Component } from 'react';

class FriendIndexItem extends Component {
  constructor(props) {
    super(props)

    this.connection = this.props.connection;
    this.deleteConnection = this.props.deleteConnection;
  }

  componentDidMount() {
    // this.props.getConnections()
  }

  handleClick() {
    return this.deleteConnection(this.connection.id)
  }

  render() {
    let { connection } = this.props;
    console.log(connection);

    return (
      <article className="friend-index-item-component-container">
        <div id="friend-index-item-pic"></div>
        <aside className="friend-index-item-body">
          <div id="ec-comment-first-section">{connection.connection.email}</div>
          <div style={{ cursor: 'pointer', color: "#0076C0"}} onClick={ this.handleClick }>Delete Connection</div>
        </aside>
      </article>
    )
  } 


}

export default FriendIndexItem;