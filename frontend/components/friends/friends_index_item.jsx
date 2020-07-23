import React, { Component } from 'react';

class FriendIndexItem extends Component {
  constructor(props) {
    super(props)

    this.connection = this.props.connection;
    // this.connections = this.props.allConnections;
    // this.createConnection = this.props.createConnection;
    // this.deleteConnection = this.props.deleteConnection;
  }

  componentDidMount() {
    // this.props.getConnections()
  }

  render() {

    return (
      <div className="friend-index-item-component-container">
        {this.connection.connection.email}
      </div>
    )
  }


}

export default FriendIndexItem;