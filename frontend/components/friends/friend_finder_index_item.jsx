import React, { Component } from 'react';


class SearchItem extends Component {
  constructor(props) {
    super(props)
    this.state = { hidden: false }

    this.author = this.props.author;

    this.handleClick = this.handleClick.bind(this);
    this.hide = this.hide.bind(this);
  }

  hide() {
    this.setState({ hidden: true })
  }

  handleClick() {
    let payload = Object.assign({}, {
      'requester_id': this.author,
      'requestee_id': this.props.result.id
    });

    // below references our createConnectionRequest
    this.props.addFriend(payload)

  }

  render() {

    return (
      <div className="search-item">
        <span>
          <div style={{ backgroundImage: 'url(' + persona + ')', backgroundSize: 'cover'}} className="searched-item-pic"></div>
          <div style={{height: 'fit-content', margin: 'auto' }}>{this.props.result.email}</div>
        </span>

        <button onClick={this.handleClick}>
          <div>ADD</div>
        </button>
      </div>
    )
  }
}

export default SearchItem;