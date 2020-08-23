class CreateRoutes < ActiveRecord::Migration[5.2]
  drop_table :routes
  def change
    create_table :routes do |t|
      t.string :title, null: false
      t.float :total_time, null: false
      t.string :activity, null: false
      t.float :distance, null: false
      t.text :description, null: false
      t.string :start_point, null: false
      t.string :end_point, null: false
      t.integer :user_id, null: false
      t.string :route_data

      t.timestamps
    end

    add_index :routes, :title, unique: true
    add_index :routes, :user_id
  end
end
