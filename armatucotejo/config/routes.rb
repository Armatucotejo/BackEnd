Rails.application.routes.draw do
  resources :players
  resources :player_score_matches
  resources :locations
  resources :locationsupportssports
  resources :matches
  resources :matchparticipants
  resources :sports
  resources :sportinterests
  resources :users
  resources :bans
  resources :reasons
  resources :admins
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
