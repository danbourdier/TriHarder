class Api::SessionsController < ApplicationController
  before_action :ensure_login, only: [:destroy]

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["invalid CREDENTIALLLLLLLS"], status: 422
    end
  end

  def destroy
    if !current_user
      return render json: ["You are not logged in"], status: 404
    else
      logout
      render json: {}
    end

  end

end
