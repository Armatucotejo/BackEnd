class SportsClub < ApplicationRecord
  has_one :sponsor, as: :sponsor_data
  has_many :locations
end
