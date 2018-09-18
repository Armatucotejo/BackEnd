class LocationSupportsSport < ApplicationRecord
  belongs_to :sport
  belongs_to :location
end
