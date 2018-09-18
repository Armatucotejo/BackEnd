class CreateMatchparticipants < ActiveRecord::Migration[5.2]
  def change
    create_table :matchparticipants do |t|
      t.string :playerid
      t.string :matchid

      t.timestamps
    end
  end
end
