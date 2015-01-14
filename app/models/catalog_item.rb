class CatalogItem < ActiveRecord::Base
  belongs_to :vendor
  belongs_to :product
  accepts_nested_attributes_for :product, allow_destroy: true
end
