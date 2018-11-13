class DropEmailColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :athletes, :email
  end
end
