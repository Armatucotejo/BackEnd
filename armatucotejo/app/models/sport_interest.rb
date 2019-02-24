# == Schema Information
#
# Table name: sport_interests
#
#  id         :integer          not null, primary key
#  player_id  :integer
#  sport_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class SportInterest < ApplicationRecord
  belongs_to :player
  belongs_to :sport
end
