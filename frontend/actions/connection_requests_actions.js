import * as ConnectionRequestAPIUtil from '../util/connection_request_api_util';

export const RECEIVE_CONNECTION_REQUESTS = "RECEIVE_CONNECTION_REQUESTS";
export const RECEIVE_CONNECTION_REQUEST = "RECEIVE_CONNECTION_REQUEST";
export const REMOVE_CONNECTION_REQUEST = "REMOVE_CONNECTION_REQUEST";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

// action creators
const receiveConnectionRequests = connectionRequests => ({
  type: RECEIVE_CONNECTION_REQUESTS,
  connectionRequests,
})

const receiveConnectionRequest = connectionRequest => ({
  type: RECEIVE_CONNECTION_REQUEST,
  connectionRequest,
})

const removeConnectionRequest = connectionRequestId => ({
  type: REMOVE_CONNECTION_REQUEST,
  connectionRequestId
})

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})

// thunk action creators

export const getConnectionRequests = () => dispatch => {
  return (
    ConnectionRequestAPIUtil.getConnectionRequests()
      .then(connectionRequests => dispatch(receiveConnectionRequests(connectionRequests)), errors => dispatch(receiveErrors(errors)))
  )
}

export const createConnectionRequest = connectionRequest => dispatch => {
  return (
    ConnectionRequestAPIUtil.createConnectionRequest(connectionRequest)
      .then(connectionRequest => dispatch(receiveConnectionRequest(connectionRequest)), errors => dispatch(receiveErrors(errors)))
  )
}


export const deleteConnectionRequest = connectionRequestId => dispatch => {
  return (
    ConnectionRequestAPIUtil.deleteConnectionRequest(connectionRequestId)
      .then(connectionRequest => dispatch(removeConnectionRequest(connectionRequestId)), errors => dispatch(receiveErrors(errors)))
  )
}
