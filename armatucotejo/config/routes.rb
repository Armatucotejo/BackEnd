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

  match 'parks', to: 'locations#listAll', via: :get

  match 'join_event', to: 'players#joinEvent', via: :post

  match 'change_gender', to: 'players#changeGender', via: :post
  match 'change_cellphone', to: 'players#changeCellphone', via: :post

  match 'change_name', to: 'users#changeName', via: :post
  match 'change_username', to: 'users#changeUsername', via: :post
  match 'change_email', to: 'users#changeEmail', via: :post


end
