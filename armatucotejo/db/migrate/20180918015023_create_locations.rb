class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.string :address
      t.string :city
      t.string :contactnumber
      t.string :name

      t.timestamps
    end
  end
end
