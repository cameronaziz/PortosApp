class CatalogItemsController < ApplicationController
  before_action :set_catalog_item, only: [:show, :edit, :update, :destroy]

  def index
    @catalog_items = CatalogItem.all
  end

  def show
  end

  def new
    @catalog_item = CatalogItem.new
  end

  def create
    @catalog_item = CatalogItem.new(item_params)
    if @catalog_item.save
      redirect_to catalog_item_path(@catalog_item), notice: "#{@catalog_item.name} successfully created"
    else
      render new_catalog_item_path
    end
  end

  def edit
  end

  def update
    if @catalog_item.update(catalog_item_params)
      name = @catalog_item.name
      redirect_to catalog_item_path(@item), notice: "#{name} saved successfully"
    else
      render edit_item_path
    end
  end


  def destroy
    @catalog_item.destroy
    redirect_to catalog_items_path
  end

  private
  def catalog_item_params
    params.require(:catalog_item).permit(:name, :box_size, :price, :vendor_code, :cheftec_code)
  end

  def set_catalog_item
    @catalog_item = CatalogItem.find(params[:id])
  end
end