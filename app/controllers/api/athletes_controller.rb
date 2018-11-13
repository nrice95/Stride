class Api::AthletesController < ApplicationController
  def create
    @athlete = Athlete.new(athlete_params)
    if @athlete.save
      login!(@athlete)
      render :show
    else
      render json: @athlete.errors.full_messages, status: 422
    end
  end

  def show
    @athlete = Athlete.find(params[:id])
  end

  def athlete_params
    params.require(:athlete).permit(:username, :password)
  end
end
