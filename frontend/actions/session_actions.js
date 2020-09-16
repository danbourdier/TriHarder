import * as APIUtil from '../util/session_api_util';

// action type constants
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const WIPE_ERRORS = 'WIPE_ERRORS';

// action creators
const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
  
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const wipeErrors = () => ({
  type: WIPE_ERRORS,
  
});

// thunk action creators

// for our thunk action creators I wanted to make sure we have error handling or tracking. hence i call upon receiveErrors
export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors)) )
); 

export const login = user => dispatch => ( 
  APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)), errors => (dispatch(receiveErrors(errors))) )
);

export const logout = () => dispatch => (
  APIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()), errors => dispatch(receiveErrors(errors)) )
);

