class Player < ApplicationRecord
  has_one :user, as: :user_data
  has_many :matches, through: :match_participants
  has_many :match_participants
  has_many :sports_interests
  has_many :sports, through: :sports_interests
end

