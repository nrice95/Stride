class AddDateAndTime < ActiveRecord::Migration[5.2]
  def change
    add_column :activities, :date, :string
    add_column :activities, :time, :string 
  end
end
