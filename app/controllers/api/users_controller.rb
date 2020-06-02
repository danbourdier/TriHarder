class Api::UsersController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      redirect_to user_url(@user)
    else
      render json: ["invalid credentials"], status: 422
    end

  end

  def user_params
    params.require(:user).permit(:f_name, :l_name, :gender, :birth_date, :email, :location)
  end
end
