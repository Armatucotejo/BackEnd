# == Schema Information
#
# Table name: player_score_matches
#
#  id               :integer          not null, primary key
#  playerqualifier  :string
#  playerqualified  :string
#  scorepunctuality :integer
#  scorefairplay    :integer
#  score_skill      :integer
#  match            :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class PlayerScoreMatch < ApplicationRecord

  #scope :scoresReciv, -> (key) { where(id: key) }
  #scope :with_cheap_products, joins(:products) & Product.cheap

end
