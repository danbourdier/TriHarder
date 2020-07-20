import { RECEIVE_CONNECTIONS, RECEIVE_CONNECTION, RECEIVE_ERRORS } from '../actions/connection_actions';

const connectionErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors

    case RECEIVE_CONNECTION:
      return {};

    default:
      return state;
  };

}

export default connectionErrorsReducer;