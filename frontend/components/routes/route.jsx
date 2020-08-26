import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

class Route extends Component {
  constructor(props) {
    super(props)

    this.route = this.props.route

  }

  componentDidMount() {
    this.props.getRoutes();
  }




  render () {

      const { total_time, distance, activity, description, 
        title, created_at, updated_at 
      } = this.route

      return (
        <main>

          <section>{title}</section>

        </main>
      )


    

    
  }


}

export default Route;