class Sportinterest < ApplicationRecord
  belongs_to :sport
  belongs_to :player
end
