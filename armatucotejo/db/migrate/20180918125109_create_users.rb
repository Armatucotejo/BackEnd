class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :username

      #Polymorphism stuff
      t.integer :user_data_id
      t.string :user_data_type

      t.timestamps
    end
  end
end
