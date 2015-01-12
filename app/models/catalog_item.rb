class CatalogItem < ActiveRecord::Base
  belongs_to :vendor
  belongs_to :ingredient
  accepts_nested_attributes_for :ingredient, allow_destroy: true
end
