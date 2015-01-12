class Ingredient < ActiveRecord::Base
  has_many :catalog_items
  has_many :vendors, through: :catalog_items
end
