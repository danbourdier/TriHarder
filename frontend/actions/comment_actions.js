import * as CommentUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_ERRORS'


const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
})

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
})

const receiveErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
})


export const createComment = comment => dispatch => {
  // debugger
  return (
    CommentUtil.createComment(comment)
      .then(comment => dispatch(receiveComment(comment)), errors => dispatch(receiveErrors(errors)) )
  )
}

export const getComments = () => dispatch => {
  return (
    CommentUtil.getComments()
      .then(comments => dispatch(receiveComments(comments)), errors => dispatch(receiveErrors(errors)) )
  )
}

export const getComment = comment => dispatch => {
  return (
    CommentUtil.getComment()
      .then(comment => dispatch(receiveComment(comment)), errors => dispatch(receiveErrors(errors)) )
  )
}

