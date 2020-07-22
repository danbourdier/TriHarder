import { RECEIVE_CONNECTION_REQUESTS, RECEIVE_CONNECTION_REQUEST, REMOVE_CONNECTION_REQUEST } from '../actions/connection_requests_actions';

const connectionRequestReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CONNECTION_REQUESTS:
      return action.connections;

    case RECEIVE_CONNECTION_REQUEST:
      nextState[action.connection.id] = action.connection
      return nextState;

    case REMOVE_CONNECTION_REQUEST:
      delete nextState[action.connectionRequestId]
      return nextState;

    default:
      return state;
  }
}

export default connectionRequestReducer;