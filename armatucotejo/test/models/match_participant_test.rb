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

require 'test_helper'

class MatchParticipantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
