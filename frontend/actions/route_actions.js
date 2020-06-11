import * as RouteUtil from "../util/route_api_util";
import { RECEIVE_ERRORS } from "./session_actions";

export const RECEIVE_ROUTE = "RECEIVE_ROUTE";
export const DELETE_ROUTE = "DELETE_ROUTE";
export const RECEIVE_ROUTE_ERRORS = "RECEIVE_ERRORS"

const receiveRoute = route => ({
  type: RECEIVE_ROUTE,
  route
});

const deleteRoute = route => ({
  type: DELETE_ROUTE,
  route
});

const receiveErrors = errors => ({
  type: RECEIVE_ROUTE_ERRORS,
  errors
})
//////////////

export const createRoute = route => dispatch => (
  RouteUtil.createRoute(route)
    .then(route => dispatch(receiveRoute(route)), errors => dispatch(receiveErrors(errors)) )
);

// export const deleteRoute = 