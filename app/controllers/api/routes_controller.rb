class Api::RoutesController < ApplicationController

  def show
    @route = Route.find(params[:id])
  end

  def create
    # debugger
    @route = Route.new(route_params)
    if @route.save
      # debugger
      render :show
    else
      # debugger
      render json: @route.errors.full_messages, status: 422
    end
  end


  private

  def route_params
    params.require(:route).permit(:athlete_id, :polyline, :activity_type)
  end



end
