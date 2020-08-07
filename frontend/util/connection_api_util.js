
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

export const getConnections = () => { 
  return (
    $.ajax({
      url: "api/connections"
    })
  )
}

export const searchConnections = connection => { 
  return (
    $.ajax({
      url: "api/connections",
      data:  { connection } 
    })  
  )
}
