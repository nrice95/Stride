# == Schema Information
#
# Table name: activities
#
#  id               :bigint(8)        not null, primary key
#  athlete_id       :integer          not null
#  title            :string           not null
#  route_id         :integer
#  description      :string
#  activity_type    :string           not null
#  distance         :float
#  duration_hours   :integer
#  duration_minutes :integer
#  duration_seconds :integer
#  run_type         :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  elevation        :float
#  elevation_units  :string
#  distance_units   :string
#

class Activity < ApplicationRecord
  validates :athlete_id, :title, :activity_type, presence: true

  belongs_to :athlete,
    foreign_key: :athlete_id,
    class_name: :Athlete
end
