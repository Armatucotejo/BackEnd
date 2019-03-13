# == Route Map
#
#                       Prefix Verb   URI Pattern                                                                              Controller#Action
#                         root GET    /                                                                                        pages#index
#                 sports_clubs GET    /sports_clubs(.:format)                                                                  sports_clubs#index
#                              POST   /sports_clubs(.:format)                                                                  sports_clubs#create
#              new_sports_club GET    /sports_clubs/new(.:format)                                                              sports_clubs#new
#             edit_sports_club GET    /sports_clubs/:id/edit(.:format)                                                         sports_clubs#edit
#                  sports_club GET    /sports_clubs/:id(.:format)                                                              sports_clubs#show
#                              PATCH  /sports_clubs/:id(.:format)                                                              sports_clubs#update
#                              PUT    /sports_clubs/:id(.:format)                                                              sports_clubs#update
#                              DELETE /sports_clubs/:id(.:format)                                                              sports_clubs#destroy
#                      players GET    /players(.:format)                                                                       players#index
#                              POST   /players(.:format)                                                                       players#create
#                   new_player GET    /players/new(.:format)                                                                   players#new
#                  edit_player GET    /players/:id/edit(.:format)                                                              players#edit
#                       player GET    /players/:id(.:format)                                                                   players#show
#                              PATCH  /players/:id(.:format)                                                                   players#update
#                              PUT    /players/:id(.:format)                                                                   players#update
#                              DELETE /players/:id(.:format)                                                                   players#destroy
#         player_score_matches GET    /player_score_matches(.:format)                                                          player_score_matches#index
#                              POST   /player_score_matches(.:format)                                                          player_score_matches#create
#       new_player_score_match GET    /player_score_matches/new(.:format)                                                      player_score_matches#new
#      edit_player_score_match GET    /player_score_matches/:id/edit(.:format)                                                 player_score_matches#edit
#           player_score_match GET    /player_score_matches/:id(.:format)                                                      player_score_matches#show
#                              PATCH  /player_score_matches/:id(.:format)                                                      player_score_matches#update
#                              PUT    /player_score_matches/:id(.:format)                                                      player_score_matches#update
#                              DELETE /player_score_matches/:id(.:format)                                                      player_score_matches#destroy
#                       cities GET    /cities(.:format)                                                                        cities#index
#                              POST   /cities(.:format)                                                                        cities#create
#                     new_city GET    /cities/new(.:format)                                                                    cities#new
#                    edit_city GET    /cities/:id/edit(.:format)                                                               cities#edit
#                         city GET    /cities/:id(.:format)                                                                    cities#show
#                              PATCH  /cities/:id(.:format)                                                                    cities#update
#                              PUT    /cities/:id(.:format)                                                                    cities#update
#                              DELETE /cities/:id(.:format)                                                                    cities#destroy
#                    locations GET    /locations(.:format)                                                                     locations#index
#                              POST   /locations(.:format)                                                                     locations#create
#                 new_location GET    /locations/new(.:format)                                                                 locations#new
#                edit_location GET    /locations/:id/edit(.:format)                                                            locations#edit
#                     location GET    /locations/:id(.:format)                                                                 locations#show
#                              PATCH  /locations/:id(.:format)                                                                 locations#update
#                              PUT    /locations/:id(.:format)                                                                 locations#update
#                              DELETE /locations/:id(.:format)                                                                 locations#destroy
#     location_supports_sports GET    /location_supports_sports(.:format)                                                      location_supports_sports#index
#                              POST   /location_supports_sports(.:format)                                                      location_supports_sports#create
#  new_location_supports_sport GET    /location_supports_sports/new(.:format)                                                  location_supports_sports#new
# edit_location_supports_sport GET    /location_supports_sports/:id/edit(.:format)                                             location_supports_sports#edit
#      location_supports_sport GET    /location_supports_sports/:id(.:format)                                                  location_supports_sports#show
#                              PATCH  /location_supports_sports/:id(.:format)                                                  location_supports_sports#update
#                              PUT    /location_supports_sports/:id(.:format)                                                  location_supports_sports#update
#                              DELETE /location_supports_sports/:id(.:format)                                                  location_supports_sports#destroy
#                      matches GET    /matches(.:format)                                                                       matches#index
#                              POST   /matches(.:format)                                                                       matches#create
#                    new_match GET    /matches/new(.:format)                                                                   matches#new
#                   edit_match GET    /matches/:id/edit(.:format)                                                              matches#edit
#                        match GET    /matches/:id(.:format)                                                                   matches#show
#                              PATCH  /matches/:id(.:format)                                                                   matches#update
#                              PUT    /matches/:id(.:format)                                                                   matches#update
#                              DELETE /matches/:id(.:format)                                                                   matches#destroy
#           match_participants GET    /match_participants(.:format)                                                            match_participants#index
#                              POST   /match_participants(.:format)                                                            match_participants#create
#        new_match_participant GET    /match_participants/new(.:format)                                                        match_participants#new
#       edit_match_participant GET    /match_participants/:id/edit(.:format)                                                   match_participants#edit
#            match_participant GET    /match_participants/:id(.:format)                                                        match_participants#show
#                              PATCH  /match_participants/:id(.:format)                                                        match_participants#update
#                              PUT    /match_participants/:id(.:format)                                                        match_participants#update
#                              DELETE /match_participants/:id(.:format)                                                        match_participants#destroy
#                       sports GET    /sports(.:format)                                                                        sports#index
#                              POST   /sports(.:format)                                                                        sports#create
#                    new_sport GET    /sports/new(.:format)                                                                    sports#new
#                   edit_sport GET    /sports/:id/edit(.:format)                                                               sports#edit
#                        sport GET    /sports/:id(.:format)                                                                    sports#show
#                              PATCH  /sports/:id(.:format)                                                                    sports#update
#                              PUT    /sports/:id(.:format)                                                                    sports#update
#                              DELETE /sports/:id(.:format)                                                                    sports#destroy
#              sport_interests GET    /sport_interests(.:format)                                                               sport_interests#index
#                              POST   /sport_interests(.:format)                                                               sport_interests#create
#           new_sport_interest GET    /sport_interests/new(.:format)                                                           sport_interests#new
#          edit_sport_interest GET    /sport_interests/:id/edit(.:format)                                                      sport_interests#edit
#               sport_interest GET    /sport_interests/:id(.:format)                                                           sport_interests#show
#                              PATCH  /sport_interests/:id(.:format)                                                           sport_interests#update
#                              PUT    /sport_interests/:id(.:format)                                                           sport_interests#update
#                              DELETE /sport_interests/:id(.:format)                                                           sport_interests#destroy
#                        users GET    /users(.:format)                                                                         users#index
#                              POST   /users(.:format)                                                                         users#create
#                     new_user GET    /users/new(.:format)                                                                     users#new
#                    edit_user GET    /users/:id/edit(.:format)                                                                users#edit
#                         user GET    /users/:id(.:format)                                                                     users#show
#                              PATCH  /users/:id(.:format)                                                                     users#update
#                              PUT    /users/:id(.:format)                                                                     users#update
#                              DELETE /users/:id(.:format)                                                                     users#destroy
#                         bans GET    /bans(.:format)                                                                          bans#index
#                              POST   /bans(.:format)                                                                          bans#create
#                      new_ban GET    /bans/new(.:format)                                                                      bans#new
#                     edit_ban GET    /bans/:id/edit(.:format)                                                                 bans#edit
#                          ban GET    /bans/:id(.:format)                                                                      bans#show
#                              PATCH  /bans/:id(.:format)                                                                      bans#update
#                              PUT    /bans/:id(.:format)                                                                      bans#update
#                              DELETE /bans/:id(.:format)                                                                      bans#destroy
#                      reasons GET    /reasons(.:format)                                                                       reasons#index
#                              POST   /reasons(.:format)                                                                       reasons#create
#                   new_reason GET    /reasons/new(.:format)                                                                   reasons#new
#                  edit_reason GET    /reasons/:id/edit(.:format)                                                              reasons#edit
#                       reason GET    /reasons/:id(.:format)                                                                   reasons#show
#                              PATCH  /reasons/:id(.:format)                                                                   reasons#update
#                              PUT    /reasons/:id(.:format)                                                                   reasons#update
#                              DELETE /reasons/:id(.:format)                                                                   reasons#destroy
#                       admins GET    /admins(.:format)                                                                        admins#index
#                              POST   /admins(.:format)                                                                        admins#create
#                    new_admin GET    /admins/new(.:format)                                                                    admins#new
#                   edit_admin GET    /admins/:id/edit(.:format)                                                               admins#edit
#                        admin GET    /admins/:id(.:format)                                                                    admins#show
#                              PATCH  /admins/:id(.:format)                                                                    admins#update
#                              PUT    /admins/:id(.:format)                                                                    admins#update
#                              DELETE /admins/:id(.:format)                                                                    admins#destroy
#                      eventos GET    /eventos(.:format)                                                                       eventos#index
#                              POST   /eventos(.:format)                                                                       eventos#create
#                   new_evento GET    /eventos/new(.:format)                                                                   eventos#new
#                  edit_evento GET    /eventos/:id/edit(.:format)                                                              eventos#edit
#                       evento GET    /eventos/:id(.:format)                                                                   eventos#show
#                              PATCH  /eventos/:id(.:format)                                                                   eventos#update
#                              PUT    /eventos/:id(.:format)                                                                   eventos#update
#                              DELETE /eventos/:id(.:format)                                                                   eventos#destroy
#                        parks GET    /parks(.:format)                                                                         locations#listAll
#                   join_event POST   /join_event(.:format)                                                                    players#joinEvent
#                change_gender POST   /change_gender(.:format)                                                                 players#changeGender
#             change_cellphone POST   /change_cellphone(.:format)                                                              players#changeCellphone
#                  change_name POST   /change_name(.:format)                                                                   users#changeName
#              change_username POST   /change_username(.:format)                                                               users#changeUsername
#                 change_email POST   /change_email(.:format)                                                                  users#changeEmail
#                 create_event POST   /create_event(.:format)                                                                  users#create_event
#                     loginown POST   /loginown(.:format)                                                                      users#loginown
#           rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
#    rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#           rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
#    update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#         rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

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
  match 'create_event', to: 'players#create_event', via: :post

  match 'change_name', to: 'users#changeName', via: :post
  match 'change_username', to: 'users#changeUsername', via: :post
  match 'change_email', to: 'users#changeEmail', via: :post
  match 'loginown', to: 'users#loginown', via: :post


end
