json.extract! location, :id, :address, :city, :contactnumber, :name, :created_at, :updated_at
json.url location_url(location, format: :json)
