import { RECEIVE_ERRORS } from '../actions/connection_requests_actions';

const connectionRequestErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors

    default:
      return state;
  };

}

export default connectionRequestErrorsReducer;