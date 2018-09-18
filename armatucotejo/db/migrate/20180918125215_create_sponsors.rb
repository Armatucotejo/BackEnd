class CreateSponsors < ActiveRecord::Migration[5.2]
  def change
    create_table :sponsors do |t|

      #Polymorphism stuff
      t.integer :sponsor_data_id
      t.string :sponsor_data_type

      t.timestamps
    end
  end
end
