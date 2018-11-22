class AddUnits < ActiveRecord::Migration[5.2]
  def change
    add_column :activities, :duration_units, :string
    add_column :activities, :elevation, :float
    add_column :activities, :elevation_units, :string
  end
end
