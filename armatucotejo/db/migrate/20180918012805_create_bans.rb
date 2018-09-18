class CreateBans < ActiveRecord::Migration[5.2]
  def change
    create_table :bans do |t|
      t.string :log
      t.date :starttime
      t.date :endtime

      t.timestamps
    end
  end
end
