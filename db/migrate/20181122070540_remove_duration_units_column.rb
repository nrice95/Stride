class RemoveDurationUnitsColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :activities, :duration_units
    add_column :activities, :distance_unites, :string
  end
end
