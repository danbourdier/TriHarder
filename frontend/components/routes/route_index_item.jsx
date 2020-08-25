 import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class RouteIndexItem extends Component {



  render() {

     // route sample

    // (title: "Pompeii Speedrun", 
    // total_time: 2.10, 
    // activity: "run",
    // distance: 26.2, 
    // description: "Hydrate or Die", 
    // start_point: "Marathon, Greece",
    // end_point: "Athens, Greece", user_id: 1)
    let { id, title, total_time, activity, distance, description, start_point, end_point, created_at } = this.props.rout;
      activity = `${activity[0]}`.toUpperCase() + `${activity.slice(1)}`
    let parsedDate = new Date(created_at)
      let month = parsedDate.getMonth()
        if (month < 10) {
          month = "0" + `${month}`
        } else {
          month = `${month}`
        };

      let day = parsedDate.getDay()
        if (day < 10) {
          day = "0" + `${day}`
        } else {
          day = `${day}`
        };

      let year = parsedDate.getFullYear()
        year = `${year}`;

    return (

      <li className="route-index-item">

        
        {/*  */}
        <section className="route-index-item-second-section">
        <Link to={`/routes/${id}`}>{title}</Link>
          <p>Distance </p>
          <span>{Number(distance).toFixed(2)}<p id="ec-mi-next-to-big">mi</p></span>
        </section>
        {/*  */}
        <section className="route-index-item-third-section">
          <span>DURATION </span>
          <p>{Number(total_time).toFixed(2)} </p>
          <span>CALORIES BURNED</span>
          <p>{Math.floor(((distance/60.00)*400))} <span id="ec-kcal-705">kCal</span></p>
        </section>
        {/*  */}
        <section className="route-index-item-fourth-section">
          
          <span>{ month + "/" + day + "/" + year } </span>
          <p>Activity </p>
          <div>{activity}</div>
        </section>
        
      </li>
    )
  };

}


 export default RouteIndexItem;