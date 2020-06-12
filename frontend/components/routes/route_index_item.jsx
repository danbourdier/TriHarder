 import React, {Component} from 'react';

class RouteIndexItem extends Component {



  render() {
    // debugger
    console.log(this.props.route)
    return (
      <li>{this.props.route}</li>
    )
  };

}


 export default RouteIndexItem;