import React, { Component } from 'react';


class SearchItem extends Component {

  render() {
    console.log(this.props.result)
    return (
      <div className="search-item">
        <span>
          <div style={{ backgroundImage: 'url(' + persona + ')', backgroundSize: 'cover'}} className="searched-item-pic"></div>
          <div style={{height: 'fit-content', margin: 'auto' }}>{this.props.result.email}</div>
        </span>

        <button>
          <div>ADD</div>
        </button>
      </div>
    )
  }
}

export default SearchItem;