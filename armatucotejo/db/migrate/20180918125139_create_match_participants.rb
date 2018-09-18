class CreateMatchParticipants < ActiveRecord::Migration[5.2]
  def change
    create_table :match_participants do |t|

      t.integer :player_id
      t.integer :match_id

      t.timestamps
    end

    add_index :match_participants, :player_id
    add_foreign_key :match_participants, :players

    add_index :match_participants, :match_id
    add_foreign_key :match_participants, :matches

  end
end
