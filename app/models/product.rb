class Product < ActiveRecord::Base
  has_many :catalog_items
  has_many :vendors, through: :catalog_items
  accepts_nested_attributes_for :vendors
end
