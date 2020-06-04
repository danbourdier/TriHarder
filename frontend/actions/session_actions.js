import * as APIUtil from '../util/session_api_util';

// action type constants
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

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

// thunk action creators



export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user), errors => dispatch(receiveErrors(errors.responseJSON))))
); // i put second args to #then because we need a way for store to keep track of errors upon ajax
// requests returning failure promises

export const login = user => dispatch => ( //-------
  APIUtil.login(user)
    .then(user => (dispatch(receiveCurrentUser(user))), errors => (dispatch(receiveErrors(errors.responseJSON))))
);

export const logout = () => dispatch => (
  APIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()), errors => dispatch(receiveErrors(errors)))
);

