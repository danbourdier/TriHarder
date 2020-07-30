import { RECEIVE_CONNECTION_REQUESTS, RECEIVE_CONNECTION_REQUEST, REMOVE_CONNECTION_REQUEST, CLEAR_CONNECTION_REQUESTS } from '../actions/connection_requests_actions';

const connectionRequestReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CONNECTION_REQUESTS:
      return action.connectionRequests;

    case RECEIVE_CONNECTION_REQUEST:
      nextState[action.connectionRequest.id] = action.connectionRequest
      return nextState;

    case REMOVE_CONNECTION_REQUEST:
      delete nextState[action.connectionRequestId]
      return nextState;
    
    // case CLEAR_CONNECTION_REQUESTS:
    //   return {};

    default:
      return state;
  }
}

export default connectionRequestReducer;