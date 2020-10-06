import React, { Component } from 'react';

import RouteIndexItem from './route_index_item';
import BarChart from './route_chart';
import RouteChartTotals from './route_index_chart_totals';

class RouteIndex extends Component {

  componentDidMount() {
    this.props.showRoutes();
  }

  render() {
    let ownRoutes = [];
    let totalDistance = 0;
    let totalTime = 0;
    let totalCalories = 0;
    let totalWorkouts = 0;
    // average cal burned every hour by middle aged male
    //    ~175 lb = 400 cal

    let allRoutes = this.props.routes;
    let index = allRoutes.length != 0 ? allRoutes.map(route => {
        totalDistance = totalDistance + route.distance;
        totalTime = totalTime + route.total_time;
        totalCalories = totalCalories + ((route.total_time / 60) * 400);
        totalWorkouts = totalWorkouts + 1;

        ownRoutes.push(route);

        return (
          <RouteIndexItem key={route.id} rout={route} />
        ) 
      
    }) : <h3 id="routeIndex20042"> No Routes Yet!</h3>
    

    

    return (
      <div className="route-index-container">
       
        <div id="chart-container-9429">
          <RouteChartTotals cal={totalCalories} time={totalTime} distance={totalDistance} numWorkouts={totalWorkouts} />
          <aside className="jss7891">
            {/* time and graph filter */}
          </aside>
          <figure className="route-index-chart">
            <BarChart routes={ownRoutes}/>
            <div></div>
          </figure>
        </div>

        <ul className="route-index-container-after-chart">
          <h3>RECENT WORKOUTS</h3>
          {index}

        </ul>
      </div>
    )
  };

};

 export default RouteIndex;