import React, {Component} from 'react';

class Route extends Component {
  constructor(props) {
    super(props)

    this.route = this.props.route

  }

  componentDidMount() {
    this.props.getRoutes();
  }


  render () {

    if (this.route) {
      const { total_time, distance, activity, description, 
        title, created_at, updated_at 
      } = this.route

      return (
        <main>

          <section>{title}</section>

        </main>
      )

    } else {
      return <div></div>
    }
    

    
  }


}

export default Route;