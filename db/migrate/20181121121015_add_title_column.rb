class AddTitleColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :routes, :title, :string, null: false
  end
end
