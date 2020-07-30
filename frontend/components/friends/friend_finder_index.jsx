import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import SearchItem from './friend_finder_index_item';

class FriendFinderIndex extends Component {
  constructor(props) {
    super(props)
    this.state = { search: "" }

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    let payload = this.state.search;
    this.props.searchConnections(payload)
    this.setState({ search: "" })
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render() {

    let { getConnections, searchConnections, deleteConnection, createConnection, createConnectionRequest, currentUser } = this.props;
    let index = Object.values(this.props.searchResults).map(res => (
      <SearchItem key={res.id} result={res} addFriend={createConnectionRequest} author={currentUser} />
    ));

    return (
      <div className="friend-component-container">
        <div className="friend-index-component-container">
          <section className="friend-index-first-section">
            <article><Link to="/friends">MY CONNECTIONS</Link></article>
            <article id="friends-index-tab"><Link to="/find_friends">FIND CONNECTIONS</Link></article>
          </section>

          <section className="friend-index-component-mid-section">
            <span>Find Tri'Harder Friends by Email:</span>
            <div id="friend-search-box-container">
              <input type="text" value={this.state.search} onChange={this.update('search')}/>
              <button type="submit" onClick={this.handleSearch}>SEARCH</button>
            </div>
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