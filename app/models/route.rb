# == Schema Information
#
# Table name: routes
#
#  id            :bigint(8)        not null, primary key
#  athlete_id    :integer          not null
#  polyline      :string           not null
#  activity_type :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  title         :string           not null
#  center_lat    :float
#  center_lng    :float
#  distance      :float
#  description   :string
#  current_date  :string
#

class Route < ApplicationRecord
  validates :polyline, :activity_type, :title, :center_lat, :center_lng, :distance, :current_date, presence: true

  belongs_to :athlete,
    foreign_key: :athlete_id,
    class_name: :Athlete
end
