 import React, { Component } from 'react';

 import RouteIndexItem from './route_index_item';

 class RouteIndex extends Component {

  componentDidMount() {
    this.props.showRoutes();
  }

  render() {

    let index = this.props.routes.map(route => {
      return (
        <RouteIndexItem key={route.id} route={route.title} />
      )
    });
    
    // debugger

    return (
      <div>
        <ul>
          {index}

        </ul>
      </div>
    )
  };

};

 export default RouteIndex;