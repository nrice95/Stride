class AddCurrentDateColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :routes, :current_date, :string
  end
end
