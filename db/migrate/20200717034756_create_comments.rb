class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :author_username, null: false
      t.string :body, null: false
      t.datetime :date_created, null: false
      t.integer :author_id, null: false
      t.integer :parent_comment_id

      t.timestamps
    end

    add_index :comments, :author_id, unique: true
    add_index :comments, :author_username, unique: true
  end
end
