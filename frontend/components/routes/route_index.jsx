import React, { Component } from 'react';

import RouteIndexItem from './route_index_item';
import BarChart from './route_chart';
import RouteChartTotals from './route_index_chart_totals';

class RouteIndex extends Component {

  componentDidMount() {
    this.props.showRoutes();
  }

  render() {
    let totalDistance = 0;
    let totalTime = 0;
    let ownRoutes = [];
    let totalCalories = 0;
    // average calories burned every hour by middle aged male
    //    ~175 lb = 400 cal

    let index = this.props.routes.map(route => {

      if (route.user_id === this.props.currentUser[1].id) {
        totalDistance = totalDistance + route.distance;
        totalTime = route.total_time + totalTime;
        totalCalories = totalCalories + ()
        ownRoutes.push(route);

        return (
          <RouteIndexItem key={route.id} route={route.title} />
        )
      }
      
    });

    

    return (
      <div className="route-index-container">

        <RouteChartTotals />

        <figure className="route-index-chart">
          <BarChart routes={ownRoutes}/>
        </figure>

        <ul>
          {index}

        </ul>
      </div>
    )
  };

};

 export default RouteIndex;