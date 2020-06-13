import React from 'react';

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
// each objects uv determins its height


class BarChartComponent extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    const data = [];
    
    // route sample

    // (title: "Pompeii Speedrun", 
    // total_time: 2.10, 
    // activity: "run",
    // distance: 26.2, 
    // description: "Hydrate or Die", 
    // start_point: "Marathon, Greece",
    // end_point: "Athens, Greece", user_id: 1)

    this.props.routes.map(route => { 
      data.push({name: route.id, uv: route.distance, pv: 2400, })
      }
    );

    
    
    return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="name" stroke="#8884d8" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#ccc" /*strokeDasharray="5 5" */ />
      <Bar className="route-chart-bar" dataKey="uv" fill="#7ac5f5" barSize={30} />
    </BarChart>
    )
  };

};
  


export default BarChartComponent;