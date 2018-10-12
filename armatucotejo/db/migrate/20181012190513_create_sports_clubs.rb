class CreateSportsClubs < ActiveRecord::Migration[5.2]
  def change
    create_table :sports_clubs do |t|
      t.string :mainaddress

      t.timestamps
    end
  end
end
