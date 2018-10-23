# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Admin.create(password: "123456789",
    username: "backAdmin",
    name: "Backy, the Admin")
Admin.create(password: "123456789",
    username: "frontAdmin",
    name: "Fronter, the Admin")
	
Sport.create(name: "Futbol")	
Sport.create(name: "Baloncesto")	
Sport.create(name: "Volleybol")	
Sport.create(name: "Futbol americano")	
Sport.create(name: "Ultimate")
	
20.times do |x|
	p = Player.create(gender: "male")

	u = User.new
	u.email = Faker::Internet.email
	u.password = Faker::Hacker.say_something_smart
	u.username = Faker::Games::SuperSmashBros.fighter
	u.name = Faker::HarryPotter.character
	u.user_data_type = "Player"
	u.user_data_id = p.id
	u.save
end
