class AddCenterColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :routes, :center_lat, :float
    add_column, :routes, :center_lng, :float
    add_column, :routes, :distance, :float
  end
end
