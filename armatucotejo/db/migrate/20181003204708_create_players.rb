class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.date :birth
      t.string :gender
      t.string :cellphone
      t.integer :score_punctuality
      t.integer :score_sportsmanship
      t.integer :score_skill

      t.timestamps
    end
  end
end
