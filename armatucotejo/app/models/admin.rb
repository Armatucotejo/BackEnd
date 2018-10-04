# == Schema Information
#
# Table name: admins
#
#  id         :integer          not null, primary key
#  name       :string
#  username   :string
#  password   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Admin < ApplicationRecord
  has_many :bans
  has_many :users, through: :bans
end
