@connection.each do |connection|
  json.set! connection.id do
    json.extract! connection, :id, :requester, :requestee, :user, :connection
