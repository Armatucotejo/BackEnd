class CreatePlayerScoreMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :player_score_matches do |t|
      t.string :playerqualifier
      t.string :playerqualified
      t.integer :scorepuntuality
      t.integer :scorefairplay
      t.integer :scoretechnique
      t.string :match

      t.timestamps
    end
  end
end
