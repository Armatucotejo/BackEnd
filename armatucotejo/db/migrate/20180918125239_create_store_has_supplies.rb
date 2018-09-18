class CreateStoreHasSupplies < ActiveRecord::Migration[5.2]
  def change
    create_table :store_has_supplies do |t|

      t.integer :sports_store_id
      t.integer :sports_supply_id

      t.timestamps
    end

    add_index :store_has_supplies, :sports_supply_id
    add_foreign_key :store_has_supplies, :sports_supplies

    add_index :store_has_supplies, :sports_store_id
    add_foreign_key :store_has_supplies, :sports_stores

  end
end
