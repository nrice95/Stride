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
#

class Route < ApplicationRecord
  validates :polyline, :activity_type, :title, presence: true

  belongs_to :athlete,
    foreign_key: :athlete_id,
    class_name: :Athlete
end
