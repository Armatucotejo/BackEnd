class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.integer :scorepuntuality
      t.integer :scorefairplay
      t.integer :scoretechnique
      t.date :birth
      t.string :gender
      t.string :cellphone

      t.timestamps
    end
  end
end
