# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Route.delete_all
User.delete_all



demo = User.create!( first_name: "demo", last_name: "user", email: "demo@demo.com", 
  password: "password", birth_date: "01/02/1990", gender: "F", location: "USA"
)
user1 = User.create!( first_name: "user1", last_name: "user1", email: "user1@user.com", 
  password: "password", birth_date: "01/02/1990", gender: "F", location: "Morraco"
)
user2 = User.create!( first_name: "user2", last_name: "user2", email: "user2@user.com", 
  password: "password", birth_date: "05/12/1990", gender: "M", location: "Afghanistan"
)
user3 = User.create!( first_name: "user3", last_name: "user3", email: "user3@user.com", 
  password: "password", birth_date: "12/02/1970", gender: "F", location: "Libya"
)
user4 = User.create!( first_name: "user4", last_name: "user4", email: "user4@user.com", 
  password: "password", birth_date: "03/14/1992", gender: "M", location: "USA"
)
user5 = User.create!( first_name: "user5", last_name: "user5", email: "user5@user.com", 
  password: "password", birth_date: "06/01/1991", gender: "F", location: "Cairo"
)


route1 = Route.create!(title: "Pompeii Speedrun", total_time: 2.10, activity: "run", 
  distance: 26.2, description: "Hydrate or Die", start_point: "Marathon, Greece", 
  end_point: "Athens, Greece", user_id: 1
)
q
route1a = Route.create!(title: "Bike Bonanza", total_time: 35.29, activity: "bike", 
  distance: 32.35, description: "Hills and scenery for the biker", start_point: "Fort Bragg, All American Expressway (Gruber Gate)", 
  end_point: "Fort Bragg, 82nd Land", user_id: 1
)
route1b = Route.create!(title: "Trail Trek Madness", total_time: 18.00, activity: "run", 
  distance: 8.6, description: "Bring your favorite trailrunners!!!", start_point: "Fort Bragg, Gruber rd Motor Pool", 
  end_point: "Fort Bragg, Zabitosky rd (Old 3rd Group trail entrance)", user_id: 1
)
route1c = Route.create!(title: "Operator's morning jog", total_time: 172.10, activity: "run", 
  distance: 38.60, description: "Enjoy a B-E-A-utiful run enjoyed by our finest, bring salt", start_point: "Fort Bragg, secret entrance(???)", 
  end_point: "Space, ???", user_id: 1
)

route2 = Route.create!(title: "Styx River Dip", total_time: 5.01, 
  activity: "swim", distance: 999.0, description: "Don't drink the water", 
  start_point: "Feneos", end_point: "Styx", user_id: 2
)
route2a = Route.create!(title: "Weekly Ruck", total_time: 174.23, 
  activity: "run", distance: 12.25, description: "Carbo-load the night before and Hydrate because you WILL sweat", 
  start_point: "Fort Bragg, Gruber rd (range road intersection)", end_point: "Range Road exit", user_id: 2
)

route3 = Route.create!(title: "Inferno to Paradiso", total_time: 168.12,
  activity: "run", distance: 588.01, description: "From a little spark may burst a flame",
  start_point: "First Circle of Hell", end_point: "9th Sphere", user_id: 3
)
route3a = Route.create!(title: "Combat Fitness", total_time: 134.18,
  activity: "run", distance: 3.80, description: "Train like you will fight",
  start_point: "Fort Bragg, Nasty Nick obstacle course", end_point: "Fort Bragg, Nasty Nick obstacle course end", user_id: 3
)
route3b = Route.create!(title: "Classified", total_time: 1159.32,
  activity: "run", distance: 120.00, description: "Classified",
  start_point: "???", end_point: "???", user_id: 3
)
