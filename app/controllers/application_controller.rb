class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token, raise: false
  attr_reader :current_user

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def require_login
    unless logged_in?
      render json: ['Required to be logged in']
    end
  end
end
