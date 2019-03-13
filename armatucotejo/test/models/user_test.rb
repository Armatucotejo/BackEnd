# == Schema Information
#
# Table name: users
#
#  id             :integer          not null, primary key
#  email          :string
#  password       :string
#  name           :string
#  username       :string
#  logindate      :datetime
#  logoutdate     :datetime
#  user_data_id   :integer
#  user_data_type :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
