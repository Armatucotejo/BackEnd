class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.date :birth
      t.string :gender
      t.string :cellphone
      t.integer :scorepunctuality
      t.integer :score_sportsmanship
      t.integer :scorefairplay
      t.integer :score_skill


      t.timestamps
    end
  end
end
