class Vendor < ActiveRecord::Base
  has_many :catalog_items
  has_many :products, through: :catalog_items
  accepts_nested_attributes_for :catalog_items, allow_destroy: true
end
