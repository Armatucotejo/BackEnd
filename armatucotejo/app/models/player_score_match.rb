class PlayerScoreMatch < ApplicationRecord

  #scope :scoresReciv, -> (key) { where(id: key) }
  #scope :with_cheap_products, joins(:products) & Product.cheap

end
