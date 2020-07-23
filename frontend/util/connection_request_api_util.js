
export const createConnectionRequest = connection_request => (
  $.ajax({
    method: "Post",
    url: "api/connection_requests",
    data: { connection_request }
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
