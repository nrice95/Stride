class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.integer :athlete_id, null: false
      t.string :polyline, null: false
      t.string :activity_type, null: false
      t.timestamps
    end
  end
end
