class Api::SessionsController < ApplicationController
  def create
    @athlete = Athlete.find_by_credentials(
      params[:athlete][:username],
      params[:athlete][:password]
    )
    if @athlete
      login!(@athlete)
      # render :show
      # render json: @athlete
      render "api/athletes/show"
    else
      render json: ["The username or password did not match. Please try again."], status: 401
    end
  end

  def show
    @athlete = Athlete.find(params[:id])
  end

  def destroy
    if logged_in?
      logout!
      render json: {}
      # render "/api/session"
    else
      render json: ["Not logged in!"], status: 404
    end
  end
end
