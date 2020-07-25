class CreateConnections < ActiveRecord::Migration[5.2]
  def change

    create_table :connections do |t|
      t.integer :requester, null: false
      t.integer :requestee, null: false

      t.timestamps
    end

    add_index :connections, [:requester, :requestee], unique: true
    add_index :connections, [:requestee, :requester], unique: true
  end
end
 