class Api::ActivitiesController < ApplicationController

  def show
    @activity = Activity.find(params[:id])
  end

  def create
    @activity = Activity.new(activity_params)
    if @activity.save
      render :show
    else
      render json: @activity.errors.full_messages, status: 422
    end
  end

  def index
    @activities = Activity.where(athlete_id: current_athlete.id)
    render :index
  end

  private

  def activity_params
    params.require(:activity).permit(:athlete_id, :title, :activity_type)
  end
end
