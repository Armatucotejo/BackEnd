# == Schema Information
#
# Table name: locations
#
#  id             :integer          not null, primary key
#  address        :string
#  contactnumber  :string
#  name           :string
#  city_id        :integer
#  sports_club_id :integer
#  googleMapsX    :float
#  googleMapsY    :float
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Location < ApplicationRecord
  has_many :sports
  has_many :matches
  belongs_to :city
  #belongs_to :sports_club
end
