class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    create_username
    if @user.save
      redirect_to @user, notice: 'User was successfully created.'
    else
      render 'users/new'
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  private
    def user_params
      params.require(:user).permit(:username, :first_name, :last_name, :email, :password, :password_confirmation)
    end

  def create_username
    first_name = @user.first_name.downcase
    last_name = @user.last_name.downcase
    @user.username = "#{first_name}#{last_name}"
  end
end
