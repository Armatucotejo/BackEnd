class CreateLocationsupportssports < ActiveRecord::Migration[5.2]
  def change
    create_table :locationsupportssports do |t|
      t.string :sport
      t.string :location

      t.timestamps
    end
  end
end
