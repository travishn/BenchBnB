class Api::SessionsController < ApplicationController
  def create
    user = User.findByCredentials(
      params[:user][:username],
      params[:user][:password]
    )
    if user
      login(user)
      render json: ['Loggedin']
    else
      render json: ['invalid credentials']
    end
  end


  def destroy
    user = User.find_by_session_token(session[:session_token])
    if user
      logout
      render json: {}
    else
      render json: ['Error 404: No user to log out']
    end
  end
end
