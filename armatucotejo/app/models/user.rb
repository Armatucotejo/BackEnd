# == Schema Information
#
# Table name: users
#
#  id             :integer          not null, primary key
#  email          :string
#  password       :string
#  name           :string
#  username       :string
#  user_data_id   :integer
#  user_data_type :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :bans
  has_many :admins, through: :bans
  belongs_to :user_data, polymorphic: true
end
