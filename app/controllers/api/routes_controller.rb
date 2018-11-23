class Api::RoutesController < ApplicationController

  def show
    @route = Route.find(params[:id])
  end

  def create
    @route = Route.new(route_params)
    if @route.save
      # debugger
      render :show
    else
      # debugger
      render json: @route.errors.full_messages, status: 422
    end
  end

  def index
    @routes = Route.where(athlete_id: current_athlete.id)
    render :index
  end


  private

  def route_params
    params.require(:route).permit(:athlete_id, :polyline, :activity_type, :title, :center_lat, :center_lng, :distance)
  end
end
