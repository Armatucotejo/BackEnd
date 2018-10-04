# == Schema Information
#
# Table name: location_supports_sports
#
#  id          :integer          not null, primary key
#  location_id :integer
#  sport_id    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class LocationSupportsSportTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
