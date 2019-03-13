class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password
      t.string :name
      t.string :username
      t.datetime :logindate
      t.datetime :logoutdate

      #Polymorphism stuff
      t.integer :user_data_id
      t.string :user_data_type

      t.timestamps
    end
  end
end
