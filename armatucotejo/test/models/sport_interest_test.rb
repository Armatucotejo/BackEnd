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

require 'test_helper'

class SportInterestTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
