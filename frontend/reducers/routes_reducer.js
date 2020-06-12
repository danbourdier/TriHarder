import { RECEIVE_ROUTE, DELETE_ROUTE, RECEIVE_ROUTES, EDIT_ROUTE } from "../actions/route_actions";

const RoutesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ROUTE:
      nextState[action.route.id] = action.route;
      return nextState;

    case RECEIVE_ROUTES:

      return action.routes

    case DELETE_ROUTE:
      delete nextState[action.routeId]

      return nextState;

    case EDIT_ROUTE:
      nextState[action.route.id] = route;

      return nextState;
    default:
      return state;

  };

}

export default RoutesReducer;