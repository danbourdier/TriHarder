
export const createComment = comment => (
  $.ajax({
    method: "Post",
    url: "api/comments",
    data: { comment }
  })

)

export const getComments = () => (
  $.ajax({
    method: "Get", 
    url: "api/comments",
  })

)

export const getComment = comment => (
  $.ajax({
    method: "Get",
    url: `api/comment/${comment.id}`
  })
  
)

export const deleteComment = commentId => (
  $.ajax({
    method: "delete",
    url: `api/comments/${commentId}`
  })
  
)