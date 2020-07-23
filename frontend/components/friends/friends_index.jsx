import React, { Component } from 'react';

import Friend from './friends_index_item';

class FriendIndex extends Component {
  constructor(props){
    super(props)
    this.connections = this.props.allConnections;
    this.createConnection = this.props.createConnection;
    this.deleteConnection = this.props.deleteConnection;
  }

  componentDidMount() {
    this.props.getConnections()
  }

  render() {

    let index = Object.values(this.connections).map(connection => (
      <Friend key={connection.id} connection={connection} delete={this.deleteConnection} />
    ))

    return (
      <div className="friend-index-component-container">
        {index}
      </div>
    )
  }


}

export default FriendIndex;