import { 
  RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER
 } from "../actions/session_actions";

const _nullUser = Object.freeze({ // works as a default state when {id: null} doesn't
  id: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    
      return {id: action.user.id}
    case LOGOUT_CURRENT_USER:
      
      return _nullUser; // upon dispatch of logout action we set the grabbed session: id to null
    default:
      return state
  }
}


 export default sessionReducer;

 ///////////////////////////////////////////////////
