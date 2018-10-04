# == Schema Information
#
# Table name: sports
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Sport < ApplicationRecord
  has_many :sports_interests
  has_many :players, through: :sports_interests
  has_many :matches
  has_many :location_supports_sports
  has_many :locations, through: :location_supports_sports
end
