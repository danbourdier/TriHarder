import { connect } from 'react-redux';

import WorkoutForm from './workout_form';
import { createRoute } from '../../actions/route_actions';
import { withRouter } from 'react-router-dom';


const mSTP = state => ({
  currentUserId: state.entities.users[Number(Object.keys(state.entities.users)[0])].id
});

const mDTP = dispatch => ({
  createRoute: root => dispatch(createRoute(root))
})


export default withRouter(connect(mSTP, mDTP)(WorkoutForm));