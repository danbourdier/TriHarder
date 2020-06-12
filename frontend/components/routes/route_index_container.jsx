import { connect } from 'react-redux';

import { showRoutes } from '../../actions/route_actions';
import RouteIndex from './route_index';

const mSTP = state => {
  debugger
  return {
    // routes: Object.values( () => dispatch(showRoutes()) ) 
  }
   
}; 

const mDTP = dispatch => ({
  // editRoute = asjd,
  // createRoute = adad,
  // deleteRoute = asda,
  showRoutes: () => dispatch(showRoutes())
});

export default connect(mSTP, mDTP)(RouteIndex)

// <div className="route-summary-container">
//   <nav>
//     two buttons 105 x 28 each
//     </nav>

//   <section className="route-summary-body">
//     summary 620 x 470
//       <h2>620 x 105</h2>
//     <h3>620 x 58</h3>
//     <aside>620 x 230</aside>
//     <footer>620 x 58</footer>
//   </section>

// </div>