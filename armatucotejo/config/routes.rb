Rails.application.routes.draw do
  resources :store_has_supplies
  resources :sports_supplies
  resources :sports_stores
  resources :sports_clubs
  resources :sponsors
  resources :cities
  resources :locations
  resources :location_supports_sports
  resources :matches
  resources :match_participants
  resources :sports
  resources :sport_interests
  resources :players
  resources :users
  resources :bans
  resources :reasons
  resources :admins
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
