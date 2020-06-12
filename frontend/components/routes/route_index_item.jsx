 import React, {Component} from 'react';

class RouteIndexItem extends Component {



  render() {
    return (
      <li>
        {console.log(this.props.route)}
      </li>
    )
  };

}


 export default RouteIndexItem;