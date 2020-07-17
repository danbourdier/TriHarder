// import two constants from actions
import { RECEIVE_COMMENTS, RECEIVE_COMMENT } from '../actions/comment_actions'

const commentReducer = (state = {}, action) => {
  Object.freeze(state)

  let nextState = Object.assign({}, state)
  switch (action.type) {

    case RECEIVE_COMMENTS:
      return action.comments
  
    case RECEIVE_COMMENT:
      nextState[comment.id] = comment
      return nextState;

    default:
      return state
  }
}

export default commentReducer;