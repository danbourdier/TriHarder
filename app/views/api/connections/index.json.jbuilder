
if @connections.length > 0 && @connections[0][:requester]
  @connections.each do |connection|
    json.set! connection.id do

      json.extract! connection, :id, :connection, :all_the_user_comments
    end
  end 
else
  @connections.each do |connection|
    json.set! connection.id do
      json.extract! connection, :id, :first_name, :last_name, :email, :gender, :birth_date,
        :email, :location, :all_the_routes, :all_the_comments, :all_the_connections, :all_the_connection_requests
    end
  end
end
 