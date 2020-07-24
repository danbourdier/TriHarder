import { RECEIVE_ROUTE_ERRORS, RECEIVE_ROUTE, WIPE_ROUTE_ERRORS } from "../actions/route_actions";

const routesErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ROUTE_ERRORS:
      
      return action.errors
  
    case RECEIVE_ROUTE:

      return {};

    case WIPE_ROUTE_ERRORS:

      return {};

    default:
      return state;
  };

}

export default routesErrorsReducer;