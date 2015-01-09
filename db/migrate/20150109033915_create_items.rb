class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.boolean :is_favorite

      t.timestamps null: false
    end
  end
end
