import * as ConnectionAPIUtil from '../util/connection_api_util';

export const RECEIVE_CONNECTIONS = "RECEIVE_CONNECTIONS";
export const RECEIVE_CONNECTION = "RECEIVE_CONNECTION";
export const REMOVE_CONNECTION = "REMOVE_CONNECTION";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_CONNECTIONS = "CLEAR_CONNECTIONS";

// action creators
const receiveConnections = connections => ({
  type: RECEIVE_CONNECTIONS,
  connections,
})

const receiveConnection = connection => ({
  type: RECEIVE_CONNECTION,
  connection,
})

const removeConnection = connectionId => ({
  type: REMOVE_CONNECTION,
  connectionId
})

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearConnections = () => ({
  type: CLEAR_CONNECTIONS
})

// thunk action creators

export const getConnections = () => dispatch => {
  return (
    ConnectionAPIUtil.getConnections()
      .then(connections => dispatch(receiveConnections(connections)), errors => dispatch(receiveErrors(errors)) )
  )
}

export const searchConnections = connection => dispatch => {
  return (
    ConnectionAPIUtil.searchConnections(connection)
      .then(connections => dispatch(receiveConnections(connections)), errors => dispatch(receiveErrors(errors)) )
  )
}

export const createConnection = connection => dispatch => {
  return (
    ConnectionAPIUtil.createConnection(connection)
      .then(connection => dispatch(receiveConnection(connection)), errors => dispatch(receiveErrors(errors)) )
  )
}


export const deleteConnection = connectionId => dispatch => {
  return (
    ConnectionAPIUtil.deleteConnection(connectionId)
      .then(connection => dispatch(removeConnection(connectionId)), errors => dispatch(receiveErrors(errors)) )
  )
}
