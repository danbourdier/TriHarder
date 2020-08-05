import { connect } from 'react-redux';

import WorkoutForm from './workout_form';
import { createRoute } from '../../actions/route_actions';


const mSTP = state => ({
  currentUserId: state.entities.users[Number(Object.keys(state.entities.users)[0])].id
});

const mDTP = dispatch => ({
  createRoute: root => dispatch(createRoute(root))
})


export default connect(mSTP, mDTP)(WorkoutForm);