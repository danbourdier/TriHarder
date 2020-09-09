import * as RouteUtil from "../util/route_api_util";
// import { RECEIVE_ERRORS } from "./session_actions";

export const RECEIVE_ROUTES = "RECEIVE_ROUTES";
export const RECEIVE_ROUTE = "RECEIVE_ROUTE";
export const DELETE_ROUTE = "DELETE_ROUTE";
export const RECEIVE_ROUTE_ERRORS = "RECEIVE_ERRORS";
export const WIPE_ROUTE_ERRORS = "WIPE_ROUTE_ERRORS";
export const EDIT_ROUTE = "EDIT_ROUTE";

const receiveRoutes = routes => ({
  type: RECEIVE_ROUTES,
  routes
})

const receiveRoute = route => ({
  type: RECEIVE_ROUTE,
  route
});

const removeRoute = routeId => ({
  type: DELETE_ROUTE,
  routeId
});

const receiveErrors = errors => ({
  type: RECEIVE_ROUTE_ERRORS,
  errors
});

const changeRoute = route => ({
  type: EDIT_ROUTE,
  route
})

export const createRoute = route => dispatch => {

  return (
    RouteUtil.createRoute(route)
      .then(route => dispatch(receiveRoute(route)), errors => dispatch(receiveErrors(errors)) )
  )
};

export const deleteRoute = routeId => dispatch => (
  RouteUtil.deleteRoute(routeId)
    .then( () => dispatch(removeRoute(routeId)), errors => dispatch(receiveErrors(errors)) )
);

export const showRoute = routeId => dispatch => (
  RouteUtil.getRoute(routeId)
    .then(route => dispatch(receiveRoute(route)), errors => dispatch(receiveErrors(errors)) )
);

export const showRoutes = () => dispatch => (
  RouteUtil.getRoutes()
    .then(routes => dispatch(receiveRoutes(routes)), errors => dispatch(receiveErrors(errors)) )
);

export const editRoute = route => dispatch => (
  RouteUtil.editRoute(route)
    .then(route => dispatch(changeRoute(route)), errors => dispatch(receiveErrors(errors)) )
);
