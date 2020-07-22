
export const createConnectionRequest = connectionRequest => (
  $.ajax({
    method: "Post",
    url: "api/connection_requests",
    data: { connectionRequest }
  })
)

export const deleteConnectionRequest = connectionRequestId => (
  $.ajax({
    url: `api/connection_requests/${connectionRequestId}`,
    method: "delete",
  })
)

export const getConnectionRequests = () => (
  $.ajax({
    url: "api/connection_requests",
  })
)
