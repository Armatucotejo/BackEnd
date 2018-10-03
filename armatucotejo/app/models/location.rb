class Location < ApplicationRecord
  has_many :sports
  has_many :matches
  belongs_to :city
  belong_to :sports_club
end
