import React, { Component } from 'react';

import Friend from './friends_index_item';
import { Link } from 'react-router-dom';

class FriendIndex extends Component {
  constructor(props){
    super(props)
    this.state = { friendCount: 0 }

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
        <section className="friend-index-first-section">
          <article><Link to="/friends">MY CONNECTIONS</Link></article>
          <article><Link to="/find_friends">FIND CONNECTIONS</Link></article>
        </section>

        <section className="friend-index-second-section">
          <aside>
            Connections ({this.connections.length ? this.connections.length : 0})
          </aside>
          
          {index}
        </section>

      </div>
    )
  }


}

export default FriendIndex;