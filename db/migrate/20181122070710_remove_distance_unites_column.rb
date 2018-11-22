class RemoveDistanceUnitesColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :activities, :distance_unites
    add_column :activities, :distance_units, :string
  end
end
