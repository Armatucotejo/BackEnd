# == Schema Information
#
# Table name: players
#
#  id         :integer          not null, primary key
#  score      :integer
#  birth      :date
#  gender     :string
#  cellphone  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class PlayerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
