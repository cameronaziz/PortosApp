class CreateCatalogItems < ActiveRecord::Migration
  def change
    create_table :catalog_items do |t|
      t.integer :ingredient_id
      t.integer :vendor_id
      t.integer :box_size
      t.decimal :price
      t.integer :vendor_code
      t.integer :cheftec_code

      t.timestamps null: false
    end
  end
end
