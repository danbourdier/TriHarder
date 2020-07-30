import React, { Component } from 'react';


class SearchItem extends Component {
  constructor(props) {
    super(props)
    this.state = { hiddenFlag: false }

    this.author = this.props.author;

    this.handleClick = this.handleClick.bind(this);
    this.hide = this.hide.bind(this);
  }

  hide() {
    this.setState({ hiddenFlag: (!this.state.hiddenFlag) })
  }

  handleClick() {
    this.hide();

    let payload = Object.assign({}, {
      'requester_id': this.author.id,
      'requestee_id': this.props.result.id
    });
    // below references our createConnectionRequest
    this.props.addFriend(payload);

  }

  render() {

    let sec = this.state.hiddenFlag ?  null : <div className="search-item">
      <span>
        <div style={{ backgroundImage: 'url(' + persona + ')', backgroundSize: 'cover' }} className="searched-item-pic"></div>
        <div style={{ height: 'fit-content', margin: 'auto' }}>{this.props.result.email}</div>
      </span>

      <button onClick={this.handleClick}>
        <div>ADD</div>
      </button>
    </div>

    return (
      <div>
        { sec }
      </div>
      
    )
  }
}

export default SearchItem;