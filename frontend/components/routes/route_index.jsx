 import React, { Component } from 'react';

 import RouteIndexItem from './route_index_item';

 class RouteIndex extends Component {

  componentDidMount() {
    this.props.showRoutes();
    // debugger
  }

  render() {

    // let index = this.props.routes.map(route => {
    //   <RouteIndexItem key={route.id} route={route} />
    //   }
    // );
      // debugger
    return (
      <div>
        <ul>
          
          {/* {this.props.showRoutes} */}
        </ul>
      </div>
    )
  };

};

 export default RouteIndex;