class ApplicationController < ActionController::Base

  helper_method :current_athlete

  def current_athlete
    Athlete.find_by(session_token: session[:session_token])
  end

  def login!(athlete)
    session[:session_token] = athlete.reset_session_token!
  end

  def logout!
    current_athlete.reset_session_token!
    session[:session_token] = nil
  end

  def logged_in?
    !!current_athlete
  end
end
