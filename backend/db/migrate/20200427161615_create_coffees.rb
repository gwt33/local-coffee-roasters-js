class CreateCoffees < ActiveRecord::Migration[6.0]
  def change
    create_table :coffees do |t|
      t.string :name
      t.string :notes
      t.string :roast
      t.belongs_to :roaster, null: false, foreign_key: true

      t.timestamps
    end
  end
end
