 import React, {Component} from 'react';

class RouteIndexItem extends Component {



  render() {
    // debugger
    console.log(this.props.route);
    // console.log(this.props.routes);

    return (
      <li className="route-index-item">
        {this.props.route}
      </li>
    )
  };

}


 export default RouteIndexItem;