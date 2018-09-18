class SportsSupply < ApplicationRecord
  has_many :store_has_supplies
  has_many :sports_stores, through: :store_has_supplies
end
