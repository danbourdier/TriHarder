import React, { Component } from 'react';

import RouteIndexItem from './route_index_item';
import BarChart from './route_chart';
import RouteChartTotals from './route_index_chart_totals';
import { Link } from 'react-router-dom';

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
    // average calories burned every hour by middle aged male
    //    ~175 lb = 400 cal

    let index = this.props.routes.map(route => {
      
      if (route.user_id === Number(Object.keys(this.props.currentUser)[0])) {
        totalDistance = totalDistance + route.distance;
        totalTime = totalTime + route.total_time;
        totalCalories = totalCalories + ((route.total_time / 60) * 400);
        totalWorkouts = totalWorkouts + 1;

        ownRoutes.push(route);

        return (
          <RouteIndexItem key={route.id} rout={route} />
        )
      }
      
    });

    

    return (
      <div className="route-index-container">
        <section className="route-index-blue-buttons">
          <div><a href="">Lifetime Stats</a></div>
          <div>
            <Link to="/123">CLICK MEEEEEEFAIFKBSGBSDLFGBFASGFAWIDGFAIFGAWIBGAWRGHAWIRGHAWKBRGAWKHBRGAILSK.HFGBLAEIRS.KXFHDGVNZLRX.KÔ†ÓGFCAIRN</Link>
          </div>
          <div><a href="">View Calendar</a></div>
        </section>
        <RouteChartTotals cal={totalCalories} time={totalTime} distance={totalDistance} numWorkouts={totalWorkouts} />
        <aside className="jss7891">
          time and graph filter
        </aside>
        <figure className="route-index-chart">
          <BarChart routes={ownRoutes}/>
          <div></div>
        </figure>

        <ul className="route-index-container-after-chart">
          <h3>RECENT WORKOUTS</h3>
          {index}

        </ul>
      </div>
    )
  };

};

 export default RouteIndex;