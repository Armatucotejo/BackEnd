class CreateMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :matches do |t|
      t.string :description
      t.integer :duration
      t.date :datetime
      t.references :organizerid, foreign_key: true

      t.timestamps
    end
  end
end
