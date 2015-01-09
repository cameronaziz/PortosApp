class ItemsController < ApplicationController
  before_action :set_item, only: [:show, :edit, :update, :destroy]

  def index
    @items = Item.all
  end

  def show
  end

  def new
    @item = Item.new
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      redirect_to item_path(@item), notice: "#{@item.name} successfully created"
    else
      render new_item_path
    end
  end

  def edit
  end

  def update
    if @item.update(item_params)
      name = @item.name
      redirect_to item_path(@item), notice: "#{name} saved successfully"
    else
      render edit_item_path
    end
  end


  def destroy
    @item.destroy
    redirect_to items_path
  end

  private
    def item_params
      params.require(:item).permit(:name, :is_favorite)
    end

    def set_item
      @item = Item.find(params[:id])
    end
end
