class Sport < ApplicationRecord
  has_many :sports_interests
  has_many :players, through: :sports_interests
  has_many :matches
  has_many :location_supports_sports
  has_many :locations, through: :location_supports_sports
end
