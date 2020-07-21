class ConnectionRequestEdit < ActiveRecord::Migration[5.2]
  add_index :connection_requests, [:requester_id, :requestee_id], unique: true
end
