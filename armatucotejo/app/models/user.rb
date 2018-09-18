class User < ApplicationRecord
  has_many :bans
  has_many :admins, through: :bans
  belongs_to :user_data, polymorphic: true
end
