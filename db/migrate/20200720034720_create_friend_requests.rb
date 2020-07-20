class CreateFriendRequests < ActiveRecord::Migration[5.2]
  def change
    drop_table :friend_requests
    create_table :friendships do |t|
      t.integer :requester, null: false
      t.integer :requestee, null: false

      t.timestamps
    end

    add_index :friendships, [:requester, :requestee], unique: true
    add_index :friendships, [:requestee, :requester], unique: true
  end
end
