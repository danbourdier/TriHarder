
export const createConnection = connection => (
    $.ajax({
      method: "Post",
      url: "api/connections",
      data: { connection }
    })
)

export const deleteConnection = connectionId => (
    $.ajax({
      url: `api/connections/${connectionId}`,
      method: "delete",
    })
)

export const getConnections = () => (
  $.ajax({
    url: "api/connections",
  })
)
