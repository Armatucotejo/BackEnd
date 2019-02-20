Rails.application.routes.draw do
  devise_for :users
  root 'pages#index'
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
  resources :pages
  resources :eventos
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
