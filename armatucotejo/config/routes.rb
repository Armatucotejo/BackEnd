Rails.application.routes.draw do
  resources :locations
  resources :locationsupportssports
  resources :matches
  resources :matchparticipants
  resources :sports
  resources :sportinterests
  resources :players
  resources :users
  resources :bans
  resources :reasons
  resources :admins
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
