# == Schema Information
#
# Table name: players
#
#  id         :integer          not null, primary key
#  score      :integer
#  birth      :date
#  gender     :string
#  cellphone  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Player < ApplicationRecord
  has_one :user, as: :user_data
  has_many :matches, through: :match_participants
  has_many :match_participants
  has_many :sports_interests
  has_many :sports, through: :sports_interests
end

