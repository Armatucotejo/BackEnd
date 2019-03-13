# == Schema Information
#
# Table name: player_score_matches
#
#  id               :integer          not null, primary key
#  playerqualifier  :string
#  playerqualified  :string
#  scorepunctuality :integer
#  scorefairplay    :integer
#  score_skill      :integer
#  match            :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

require 'test_helper'

class PlayerScoreMatchTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
