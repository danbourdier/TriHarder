import * as ConnectionAPIUtil from '../util/connection_api_util';

export const RECEIVE_CONNECTIONS = "RECEIVE_CONNECTIONS";
export const RECEIVE_CONNECTION = "RECEIVE_CONNECTION";
export const REMOVE_CONNECTION = "REMOVE_CONNECTION";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

// action creators
const receiveConnections = connections => ({
  type: RECEIVE_CONNECTIONS,
  connections,
})

const receiveConnection = connection => ({
  type: RECEIVE_CONNECTION,
  connection,
})

const removeConnection = connection => ({
  type: REMOVE_CONNECTION,
  connection
})

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})

// thunk action creators

export const getConnections = () => dispatch => {
  return (
    ConnectionAPIUtil.getConnections()
      .then(connections => dispatch(receiveConnections(connections)), errors => dispatch(receiveErrors(errors)) )
  )
}

export const getConnections = () => dispatch => {
  return (
    ConnectionAPIUtil.getConnections()
      .then(connections => dispatch(receiveConnections(connections)), errors => dispatch(receiveErrors(errors)) )
  )
}