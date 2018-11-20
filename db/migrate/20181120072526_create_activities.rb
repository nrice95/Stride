class CreateActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :activities do |t|
      t.integer :athlete_id, null: false
      t.string :title, null: false
      t.integer :route_id
      t.string :description
      t.string :activity_type, null: false
      t.float :distance
      t.integer :duration_hours
      t.integer :duration_minutes
      t.integer :duration_seconds
      t.string :run_type
      t.timestamps
    end
  end
end
