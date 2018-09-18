class SportsStore < ApplicationRecord
  has_one :sponsor, as: :sponsor_data
  has_many :store_has_supplies
  has_many :sports_supplies, through: :store_has_supplies
end
