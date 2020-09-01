import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class RouteIndexItem extends Component {
  constructor(props) {
    super(props)

    this.ourRoute = this.props.rout;



  }

  // componentDidMount() {

  // }

  scrollFunc() {
    return window.scrollTo(0, -1000);
  }

  render() {

    let { id, title, total_time, activity, distance, description, start_point, 
          end_point, created_at 
        } = this.ourRoute;

      activity = `${activity[0]}`.toUpperCase() + `${activity.slice(1)}`

    let parsedDate = created_at.split('-');

      let month = Number(parsedDate[1])
        if (month < 10) {
          month = "0" + `${month}`
        } else {
          month = `${month}`
        };

      let day = parseFloat(parsedDate[2])
        if (day < 10) {
          day = "0" + `${day}`
        } else {
          day = `${day}`
        };

      let year = Number(parsedDate[0])
        year = `${year}`;

    return (

      <li className="route-index-item">

        
        {/*  */}
        <section className="route-index-item-second-section">
        <Link to={`/routes/${id}`} onClick={this.scrollFunc}>{title}</Link>
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