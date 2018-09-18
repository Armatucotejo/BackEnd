class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.integer :score
      t.date :birth
      t.string :gender
      t.string :cellphone

      t.timestamps
    end
  end
end
