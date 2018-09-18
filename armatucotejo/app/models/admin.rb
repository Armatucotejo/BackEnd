class Admin < ApplicationRecord
  has_many :bans
  has_many :users, through: :bans
end
