import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import SearchItem from './friend_finder_index_item';

class FriendFinderIndex extends Component {
  constructor(props) {
    super(props)
    this.state = { search: "" }

  }

  handleSearch() {
    let payload = this.state.search;

    this.props.searchConnections(payload)
  }

  update(field) {

    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render() {

    let { getConnections, searchConnections, deleteConnection, createConnection} = this.props;
    let index = Object.values(this.props.searchResults).map(res => (
      <SearchItem key={res.id} result={res}  />
    ));

    return (
      <div className="friend-component-container">
        <div className="friend-index-component-container">
          <section className="friend-index-first-section">
            <article><Link to="/friends">MY CONNECTIONS</Link></article>
            <article id="friends-index-tab"><Link to="/find_friends">FIND CONNECTIONS</Link></article>
          </section>

          <section id="friend-search-box-container">
            <input type="text" placeholder={"Search for a connection!"} value={this.state.search} onChange={this.update('search')}/>
            <button type="submit" onClick={this.handleSearch}>SEARCH</button>
          </section>

          <section className="search-item-container">
            { index }
          </section>
 
        </div>
      </div>
    )
  }

}

export default FriendFinderIndex;