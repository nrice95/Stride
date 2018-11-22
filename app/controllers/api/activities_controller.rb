class Api::ActivitiesController < ApplicationController

  def show
    @activity = Activity.find(params[:id])
  end

  def create
    @activity = Activity.new(activity_params)
    debugger
    if @activity.save
      debugger
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
    params.require(:activity).permit(
      :athlete_id,
      :title,
      :activity_type,
      :title,
      :description,
      :distance,
      :duration_hours,
      :duration_minutes,
      :duration_seconds,
      :run_type
    )
  end
end
