class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.string :address
      t.string :contactnumber
      t.string :name

      t.integer :city_id
      t.integer :sports_club_id
	  t.float :googleMapsX
	  t.float :googleMapsY
	  

      t.timestamps
    end

    add_index :locations, :city_id
    add_foreign_key :locations, :cities

    #add_index :locations, :sports_club_id
    #add_foreign_key :locations, :sports_clubs

  end
end
