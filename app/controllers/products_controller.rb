class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :edit, :update, :destroy]

  def index
    @products = Product.all
  end

  def show
  end

  def new
    @product = Product.new
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      redirect_to products_path(@product), notice: "#{@product.name} successfully created"
    else
      render new_product_path
    end
  end

  def edit
  end

  def vendor_products
    @vendor = Vendor.find(params[:vendor_id])
    @products = @vendor.products
  end

  def update
    if @product.update(product_params)
      name = @product.name
      redirect_to product_path(@product), notice: "#{name} saved successfully"
    else
      render edit_product_path
    end
  end


  def destroy
    @product.destroy
    redirect_to products_path
  end

  private
  def product_params
    params.require(:product).permit(:name, :description, )
  end

  def set_product
    @product = Product.find(params[:id])
  end
end
