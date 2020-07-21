
export const createConnection = connection => (
    $.ajax({
      method: "Post",
      url: "api/connections",
      data: { connection }
    })

)

export const deleteConnection = connection => (
    $.ajax({
      url: `api/connections/${connection.id}`,
      method: "delete",
      data: { connection }
    })

)

export const getConnections = () => (
  $.ajax({
    url: "api/connections",
  })
)