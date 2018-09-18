class CreateLocationSupportsSports < ActiveRecord::Migration[5.2]
  def change
    create_table :location_supports_sports do |t|

      t.integer :location_id
      t.integer :sport_id

      t.timestamps
    end

    add_index :location_supports_sports, :location_id
    add_foreign_key :location_supports_sports, :locations

    add_index :location_supports_sports, :sport_id
    add_foreign_key :location_supports_sports, :sports

  end
end
