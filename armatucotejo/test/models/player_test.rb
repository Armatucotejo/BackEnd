# == Schema Information
#
# Table name: players
#
#  id                  :integer          not null, primary key
#  birth               :date
#  gender              :string
#  cellphone           :string
#  scorepunctuality    :integer
#  score_sportsmanship :integer
#  scorefairplay       :integer
#  score_skill         :integer
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

require 'test_helper'

class PlayerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
