class CreateFriendRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :friend_requests do |t|
      t.integer :requester, null: false
      t.integer :requestee, null: false

      t.timestamps
    end

    add_index :friend_requests, [:requester, :requestee], unique: true
    add_index :friend_requests, [:requestee, :requester], unique: true
  end
end
