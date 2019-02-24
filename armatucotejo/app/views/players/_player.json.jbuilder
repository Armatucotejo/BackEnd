
json.extract! player, :id, :scorepunctuality, :scorefairplay, :birth, :gender, :cellphone, :created_at, :updated_at

json.url player_url(player, format: :json)
