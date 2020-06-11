class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.string :route, null: :false
      t.string :total_time, null: :false
      t.string :activity, null: :false
      t.float :distance, null: :false
      t.text :description, null: :false
      t.string :start_point, null: :false
      t.string :end_point, null: :false
      t.string :user_id, null: :false

      t.timestamps
    end

    add_index :routes, :route, unique: true
    add_index :routes, :user_id, unique: true
  end
end
