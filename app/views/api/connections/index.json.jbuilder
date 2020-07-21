@connections.each do |connection|
  json.set! connection.id do
    json.extract! connection, :id, :requester, :requestee
  end
end
 