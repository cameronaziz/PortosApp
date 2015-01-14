class VendorsController < ApplicationController
  before_action :set_vendor, only: [:show, :edit, :update, :destroy]

  def index
    @vendors = Vendor.all
  end


  def new
    @vendor = Vendor.new
  end

  def new_with_vendor

  end

  def create
    @vendor = Vendor.new(vendor_params)
    if @vendor.save
      redirect_to vendor_path(@vendor), notice: "#{@vendor.name} successfully created"
    else
      render new_vendor_path
    end
  end

  def show
    @products = @vendor.products
  end


  def edit
  end

  def update
    if @vendor.update(vendor_params)
      name = @vendor.name
      redirect_to vendor_path(@vendor), notice: "#{name} saved successfully"
    else
      render edit_vendor_path
    end
  end


  def destroy
    @vendor.destroy
    redirect_to vendors_path
  end

  private
  def vendor_params
    params.require(:vendor).permit(:name, :contact, :email, :phone, {:ingredient_ids => []}, :box_size, :price)
  end

  def set_vendor
    @vendor = Vendor.find(params[:id])
  end
end