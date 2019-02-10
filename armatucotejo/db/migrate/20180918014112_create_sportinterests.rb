class CreateSportinterests < ActiveRecord::Migration[5.2]
  def change
    create_table :sportinterests do |t|
      t.references :sport, foreign_key: true
      t.references :player, foreign_key: true

      t.timestamps
    end
  end
end
