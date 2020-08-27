# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Connection.destroy_all
Comment.destroy_all
Route.destroy_all



demo = User.create!( first_name: "demo", last_name: "user", email: "demo@demo.com", 
  password: "password", birth_date: "01/02/1990", gender: "F", location: "USA"
)
user1 = User.create!( first_name: "Adi", last_name: "Jeronimo", email: "Adi@triharder.com", 
  password: "password", birth_date: "01/02/1990", gender: "F", location: "Morraco"
)
user2 = User.create!( first_name: "Rosalia", last_name: "Davika", email: "Rosalia@triharder.com", 
  password: "password", birth_date: "05/12/1990", gender: "M", location: "Afghanistan"
)
user3 = User.create!( first_name: "Toshika", last_name: "Kermit", email: "Toshika@triharder.com", 
  password: "password", birth_date: "12/02/1970", gender: "F", location: "Libya"
)
user4 = User.create!( first_name: "Oleysa", last_name: "Prasad", email: "Oleysa@triharder.com", 
  password: "password", birth_date: "03/14/1992", gender: "M", location: "USA"
)
user4 = User.create!( first_name: "Manjeet", last_name: "Zighaed", email: "Manjeet@triharder.com", 
  password: "password", birth_date: "03/14/1992", gender: "M", location: "USA"
)
user4 = User.create!( first_name: "Mandy", last_name: "Ebba", email: "Mandy@triharder.com", 
  password: "password", birth_date: "03/14/1992", gender: "M", location: "USA"
)
user4 = User.create!( first_name: "Damyan", last_name: "Jonathan", email: "Damyan@triharder.com", 
  password: "password", birth_date: "03/14/1992", gender: "M", location: "USA"
)

connection1 = Connection.create!(requester: demo.id, requestee: user1.id)
  connection1a = Connection.create!(requester: user1.id, requestee: demo.id)
connection2 = Connection.create!(requester: demo.id, requestee: user2.id)
  connection2 = Connection.create!(requester: user2.id, requestee: demo.id)
connection3 = Connection.create!(requester: demo.id, requestee: user3.id)
  connection3 = Connection.create!(requester: user3.id, requestee: demo.id)


route1 = Route.create!(title: "Pompeii Speedrun", total_time: 2.10, activity: "run", 
  distance: 26.2, description: "Hydrate or Die", start_point: "Marathon, Greece", 
  end_point: "Athens, Greece", user_id: demo.id, 
  route_data: "[{\"40.745419545040676\",\"-73.98487963240974\"],{\"40.74393204028784\",\"-73.98558773558968\"]]",
)

route1a = Route.create!(title: "Bike Bonanza", total_time: 35.29, activity: "bike", 
  distance: 32.35, description: "Hills and scenery for the biker", start_point: "Fort Bragg, All American Expressway (Gruber Gate)", 
  end_point: "Fort Bragg, 82nd Land", user_id: demo.id, 
  route_data: "[{\"40.79510652797678\",\"-73.9695248909981\"],{\"40.77028021693856\",\"-73.98772099695513\"]]"
)
route1b = Route.create!(title: "Trail Trek Madness", total_time: 18.00, activity: "run", 
  distance: 8.6, description: "Bring your favorite trailrunners!!", start_point: "Fort Bragg, Gruber rd Motor Pool", 
  end_point: "Fort Bragg, Zabitosky rd (Old 3rd Group trail entrance)", user_id: demo.id, 
  route_data: "[{\"40.74507002505624\",\"-73.9917890028321\"],{\"40.74485868650009\",\"-73.9816287950837\"],{\"40.7222374605992\",\"-73.98341342514998\"],{\"40.73407541016733\",\"-73.95405932969099\"]]"
)
route1c = Route.create!(title: "Operator's morning jog", total_time: 172.10, activity: "run", 
  distance: 38.60, description: "Enjoy a B-E-A-utiful run enjoyed by our finest, bring salt", start_point: "Fort Bragg, secret entrance(???)", 
  end_point: "Space, ???", user_id: user2.id, 
  route_data: "[{\"40.749345370909786\",\"-74.04060520690315\"],{\"40.77248951697367\",\"-74.02206577819221\"],{\"40.81671174616477\",\"-73.98045905062314\"],{\"40.849442018590025\",\"-73.9668842173098\"]]"
)
route2 = Route.create!(title: "Styx River Dip", total_time: 5.01, 
  activity: "swim", distance: 999.0, description: "Don't drink the water", 
  start_point: "Feneos", end_point: "Styx", user_id: user2.id,
  route_data: "[{\"40.756188737205655\",\"-73.92982997458809\"],{\"40.71811937975345\",\"-73.8449478149414\"],{\"40.71274368208104\",\"-73.92914332908028\"]]"
)
route2a = Route.create!(title: "Weekly Ruck", total_time: 174.23, 
  activity: "run", distance: 12.25, description: "Carbo-load the night before and Hydrate because you WILL sweat", 
  start_point: "Fort Bragg, Gruber rd (range road intersection)", 
  end_point: "Range Road exit", user_id: demo.id, 
  route_data: "[{\"40.813962625000215\",\"-73.91348518335485\"],{\"40.86279436226198\",\"-73.90318550073766\"],{\"40.8513688821947\",\"-73.84001411401891\"]]"
)

route3 = Route.create!(title: "Inferno to Paradiso", total_time: 168.12,
  activity: "run", distance: 588.01, description: "From a little spark may burst a flame",
  start_point: "First Circle of Hell", end_point: "9th Sphere", user_id: user3.id,
  route_data: "[{\"40.74620799035307\",\"-73.78410019439094\"],{\"40.72071290094909\",\"-73.80641617339485\"],{\"40.752970353837235\",\"-73.81396927398079\"],{\"40.74516756570181\",\"-73.77826370757454\"]]"

)
route3a = Route.create!(title: "Combat Fitness", total_time: 134.18,
  activity: "run", distance: 3.80, description: "Train like you will fight",
  start_point: "Fort Bragg, Nasty Nick obstacle course", 
  end_point: "Fort Bragg, Nasty Nick obstacle course end", 
  user_id: user3.id,
  route_data: "[{\"40.74596414228581\",\"-73.77685242393964\"],{\"40.78340872609218\",\"-73.8015716622209\"],{\"40.78028914990583\",\"-73.83865051964277\"],{\"40.76988950445623\",\"-73.80569153526777\"]]"
)
route3b = Route.create!(title: "Classified", total_time: 1159.32,
  activity: "run", distance: 120.00, description: "Classified",
  start_point: "???", end_point: "???", user_id: user4.id,
  route_data: "[{\"40.93097478938765\",\"-73.79819988147209\"],{\"40.93771832869413\",\"-73.85999797717521\"],{\"40.89932283559313\",\"-73.80506633655021\"],{\"40.88842275489679\",\"-73.84489177600334\"],{\"40.86298224969831\",\"-73.85587810412834\"],{\"40.84376559427204\",\"-73.84873164960686\"],{\"40.93200667821101\",\"-73.86988943224537\"]]"
)


comment1 = Comment.create!(author_email: demo.email, body: "Hands down the best run i had in ages! Check out the route in Hell's Kitchen!",
  author_id: demo.id
)
  comment1a = Comment.create!(author_email: user1.email, body: "I can't wait to run it myself!!!",
    author_id: user1.id, parent_comment_id: comment1.id
  )
comment2 = Comment.create!(author_email: demo.email, body: "RICE method folks, it really works",
  author_id: demo.id
)

comment3 = Comment.create!(author_email: user2.email, body: "I'm looking forward to crushing my next marathon, would anyone like to join and train?",
  author_id: user2.id
)
  comment3a = Comment.create!(author_email: user1.email, body: "Sign me up brother",
    author_id: user1.id, parent_comment_id: comment3.id
  )


