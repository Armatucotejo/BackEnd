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

class User < ApplicationRecord
  has_many :bans
  has_many :admins, through: :bans
  belongs_to :user_data, polymorphic: true
  

  #def password
  #  self.password
  #end

end
