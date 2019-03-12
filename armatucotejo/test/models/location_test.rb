# == Schema Information
#
# Table name: locations
#
#  id             :integer          not null, primary key
#  address        :string
#  contactnumber  :string
#  name           :string
#  city_id        :integer
#  sports_club_id :integer
#  googleMapsX    :float
#  googleMapsY    :float
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'test_helper'

class LocationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
