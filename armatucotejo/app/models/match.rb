# == Schema Information
#
# Table name: matches
#
#  id           :integer          not null, primary key
#  description  :string
#  duration     :integer
#  datetime     :datetime
#  location_id  :integer
#  sport_id     :integer
#  organizer_id :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Match < ApplicationRecord
  belongs_to :location
  belongs_to :sport
  has_many :match_participants
  has_many :players, through: :match_participants
  #belongs_to :player  maybe?, for the organizer, that foreign key exists but the relation is not in our model
end
