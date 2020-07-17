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
  return (
    CommentUtil.createComment(comment)
      .then(comment => dispatch(createComment(comment)), errors => dispatch(receiveErrors(errors)) )
  )
}

