
export const createComment = comment => (
  $.ajax({
    method: "Post",
    url: "api/comments",
    data: { comment }
  })
)