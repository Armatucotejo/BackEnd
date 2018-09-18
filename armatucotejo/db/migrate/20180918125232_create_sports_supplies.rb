class CreateSportsSupplies < ActiveRecord::Migration[5.2]
  def change
    create_table :sports_supplies do |t|
      t.string :name

      t.timestamps
    end
  end
end
