class CreateSportInterests < ActiveRecord::Migration[5.2]
  def change
    create_table :sport_interests do |t|

      t.integer :player_id
      t.integer :sport_id

      t.timestamps
    end

    add_index :sport_interests, :player_id
    add_foreign_key :sport_interests, :players

    add_index :sport_interests, :sport_id
    add_foreign_key :sport_interests, :sports

  end
end
