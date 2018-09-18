class CreateSportsStores < ActiveRecord::Migration[5.2]
  def change
    create_table :sports_stores do |t|
      t.string :address

      t.timestamps
    end
  end
end
