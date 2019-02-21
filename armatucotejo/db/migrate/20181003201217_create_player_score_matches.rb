class CreatePlayerScoreMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :player_score_matches do |t|
      t.string :playerqualifier
      t.string :playerqualified
      t.integer :scorepunctuality
      t.integer :scorefairplay
      t.integer :score_skill
      t.string :match

      t.timestamps
    end
  end
end
