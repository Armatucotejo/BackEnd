class Location < ApplicationRecord
  has_many :location_supports_sports
  has_many :sports, through: :location_supports_sports
  has_many :matches
  belongs_to :city
  belong_to :sports_club
end
