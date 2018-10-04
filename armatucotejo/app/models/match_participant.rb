# == Schema Information
#
# Table name: match_participants
#
#  id         :integer          not null, primary key
#  player_id  :integer
#  match_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class MatchParticipant < ApplicationRecord
  belongs_to :player
  belongs_to :match
end
