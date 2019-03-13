# == Schema Information
#
# Table name: matches
#
#  id           :integer          not null, primary key
#  description  :string
#  duration     :integer
#  datetime     :datetime
#  location_id  :integer
#  sport_id     :integer
#  organizer_id :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class MatchTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
