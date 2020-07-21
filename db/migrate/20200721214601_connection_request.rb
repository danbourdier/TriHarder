class ConnectionRequest < ActiveRecord::Migration[5.2]
  def change
    create_table :connection_requests do |t|
      t.boolean :pending, null: false
      t.integer :requester_id, null: false
      t.integer :requestee_id, null: false

      t.timestamps
    end
  end


end
