class CreateRoasterCoffees < ActiveRecord::Migration[6.0]
  def change
    create_table :roaster_coffees do |t|
      t.belongs_to :roaster, null: false, foreign_key: true
      t.belongs_to :coffee, null: false, foreign_key: true

      t.timestamps
    end
  end
end
