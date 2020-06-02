import { 
  RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_ERRORS 
 } from "../../actions/session_actions";

// const sessionId = 

const sessionReducer = (state = {id: null}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    
      return action.user.id
    case LOGOUT_CURRENT_USER:
      
      nextState[id] = null;
      return nextState;
    default:
      return state
  }
}


 export default sessionReducer;
