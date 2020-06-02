import { 
  RECEIVE_CURRENT_USER, RECEIVE_ERRORS 
} from '.././actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      
      return action.errors
    case RECEIVE_CURRENT_USER:

    return [];
    default:
      return state;
  }
}

export default sessionErrorsReducer;