class Sponsor < ApplicationRecord
  has_one :user, as: :user_data
  belongs_to :sponsor_data, polymorphic: true
end
