import { RECEIVE_ROUTE } from "../actions/route_actions";

const RoutesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ROUTE:
      nextState[action.route.id] = action.route;
      return nextState;

    default:
      return state;

  };

}

export default RoutesReducer;