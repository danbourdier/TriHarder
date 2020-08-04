import React, { Component } from 'react';

class FriendIndexItem extends Component {
  constructor(props) {
    super(props)

    this.connection = this.props.connection;
    this.deleteConnection = this.props.deleteConnection;

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    // this.props.getConnections()
  }

  handleClick() {
    return this.deleteConnection(this.connection.id)
  }

  render() {
    let connection = this.props.connection;

    let profilePicCollection = [camel, shark, turtle, bear, squirrel]

    let profilePic = {
      backgroundSize: 'cover',
      backgroundImage: 'url(' + profilePicCollection[Math.floor(Math.random() * profilePicCollection.length)] + ')'
    };
    if (connection.connection) {

      return (
        <article className="friend-index-item-component-container">
          <div style={profilePic} id="friend-index-item-pic"></div>
          <aside className="friend-index-item-body">
            <div className="friend-index-item-body-email">{connection.connection.email}</div>
            <div style={{ cursor: 'pointer', color: "#0076C0", fontSize: 11 }} onClick={ this.handleClick }>Delete Connection</div>
          </aside>
        </article>
      )
    } else {
      return (
        <article className="friend-index-item-component-container">
          <div style={profilePic} id="friend-index-item-pic"></div>
          <aside className="friend-index-item-body">
            <div className="friend-index-item-body-email">{connection.email}</div>
            <div style={{ cursor: 'pointer', color: "#0076C0", fontSize: 11 }} onClick={this.handleClick}>Delete Connection</div>
          </aside>
        </article>
      )
    }
  } 


}

export default FriendIndexItem;