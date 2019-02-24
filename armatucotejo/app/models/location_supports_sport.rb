# == Schema Information
#
# Table name: location_supports_sports
#
#  id          :integer          not null, primary key
#  location_id :integer
#  sport_id    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class LocationSupportsSport < ApplicationRecord
  belongs_to :sport
  belongs_to :location
end
