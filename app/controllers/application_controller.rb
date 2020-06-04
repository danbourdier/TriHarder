class ApplicationController < ActionController::Base
  # CELLL
  helper_method :current_user, :ensure_login, :login, :logout, :logged_in?

  def current_user
    @user ||= User.find_by(session_token: session[:session_token])
  end

  def ensure_login
    render json: ["not logged in"] unless logged_in?
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    current_user = nil
  end

  def logged_in?
    !!current_user
  end


end
