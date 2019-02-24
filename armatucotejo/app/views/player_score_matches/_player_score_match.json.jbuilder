
json.extract! player_score_match, :id, :playerqualifier, :playerqualified, :scorepunctuality, :scorefairplay, :match, :created_at, :updated_at

json.url player_score_match_url(player_score_match, format: :json)
