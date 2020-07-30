import React from 'react';

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
// each objects uv determins its height


class BarChartComponent extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    const data = [];

    this.props.routes.map((route, idx) => { 
      data.push({name: idx + 1, distance: route.distance, pv: 2400, })
      }
    );

    return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="name" stroke="#8884d8" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#ccc" /*strokeDasharray="5 5" */ />
      <Bar className="route-chart-bar" dataKey="distance" fill="#7ac5f5" barSize={30} />
    </BarChart>
    )
  };

};
  


export default BarChartComponent;