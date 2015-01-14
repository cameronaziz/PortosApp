class RenameIngredientsToProducts < ActiveRecord::Migration
  def change
    rename_table :ingredients, :products
    rename_column :catalog_items, :ingredient_id, :product_id
  end
end
