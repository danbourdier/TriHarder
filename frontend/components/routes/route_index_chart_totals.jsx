import React, {Component} from 'react';


const RouteChartTotals = props => (
  <figure className="route-index-chart-totals-container">
    <aside className="route-index-char-totals-calcs">
      {/* 105 */}
      <div>
        <p>TIME</p>
        <aside>{parseFloat(props.time/60.0)}</aside>
        <span>hours</span>
      </div>

      <div>
        <p>DISTANCE</p>
        <aside>{props.distance}</aside>
        <span>miles</span>
      </div>

      <div>
        <p>CALORIES</p>
        <aside>{props.cal}</aside>
        <span>burned</span>
      </div>

      <div>
        <p>WORKOUTS</p>
        <aside>{props.numWorkouts}</aside>
        <span>completed</span>
      </div>

    </aside>
  </figure>

);

export default RouteChartTotals;
