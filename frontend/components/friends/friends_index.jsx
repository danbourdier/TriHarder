import React, { Component } from 'react';

import Friend from './friends_index_item';

class FriendIndexItem extends Component {
  constructor(props){
    super(props)
    this.connections = this.props.allConnections
    this.createConnection = this.props.createConnection
  }

  componentDidMount() {
    this.props.getConnections()
  }

  render() {

    let index = Object.values(this.connections).map(connection => (
      <Friend key={connection.id} connection={connection} />
    ))

    
    return (

      <div>HELLLLOOOOOOO WOOORRRRLLLDDDD</div>

    )
  }


}

export default FriendIndexItem;