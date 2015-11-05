class ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def create
    Product.create(product_params)
  end

  def new
    @product = Product.new
  end

  def edit
    @product = Product.find(params[:id])
  end

  def update
    product = Product.find(params[:id])
    product.update(product_params)
  end

  def show
    @product = Product.find(params[:id])
  end

  private
  def product_params
    params.require(:product).permit(:name, :stock)
  end
end
