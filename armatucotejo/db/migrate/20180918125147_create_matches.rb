class CreateMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :matches do |t|
      t.string :description
      t.integer :duration
      t.datetime :datetime

      t.integer :location_id
      t.integer :sport_id
      t.integer :organizer_id

      t.timestamps
    end

    add_index :matches, :location_id
    add_foreign_key :matches, :locations

    add_index :matches, :sport_id
    add_foreign_key :matches, :sports

  end
end
