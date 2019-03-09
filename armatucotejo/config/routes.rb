Rails.application.routes.draw do

  root 'pages#index'
  resources :sports_clubs
  resources :players
  resources :player_score_matches
  resources :cities

  resources :locations
  resources :location_supports_sports
  resources :matches
  resources :match_participants
  resources :sports

  resources :sport_interests

  resources :users
  resources :bans
  resources :reasons
  resources :admins
  resources :eventos
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  match 'parks', to: 'locations#listAll', via: :get
end
