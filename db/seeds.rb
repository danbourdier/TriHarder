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
  route_data: "[{\"lat\":40.74691368416189,\"lng\":-74.00485538404816},
    {\"lat\":40.7439874793943,\"lng\":-73.99215244215362},
    {\"lat\":40.75892283663857,\"lng\":-73.97663021486471},
    {\"lat\":40.766463986219414,\"lng\":-73.98881817262838}]",
)

route1a = Route.create!(title: "Bike Bonanza", total_time: 35.29, activity: "bike", 
  distance: 32.35, description: "Hills and scenery for the biker", start_point: "Fort Bragg, All American Expressway (Gruber Gate)", 
  end_point: "Fort Bragg, 82nd Land", user_id: demo.id, 
  route_data: "[{\"lat\":\"40.725962147255785\",\"lng\":\"-74.00713919405854\"},
    {\"lat\":40.70696605646243,\"lng\":-74.01160238985932},
    {\"lat\":40.714252869067494,\"lng\":-73.98173331026948},
    {\"lat\":40.735848378070145,\"lng\":-73.97795675997651}]",
)
route1b = Route.create!(title: "Trail Trek Madness", total_time: 18.00, activity: "run", 
  distance: 8.6, description: "Bring your favorite trailrunners!!", start_point: "Fort Bragg, Gruber rd Motor Pool", 
  end_point: "Fort Bragg, Zabitosky rd (Old 3rd Group trail entrance)", user_id: demo.id, 
  route_data: "[{\"lat\":40.766443082711,\"lng\":-73.99405699529858},
    {\"lat\":40.761632446657785,\"lng\":-73.98169737615795},
    {\"lat\":40.75916198472412,\"lng\":-73.97654753484936},
    {\"lat\":40.75630133514578,\"lng\":-73.97380095281811},
    {\"lat\":40.76098233399829,\"lng\":-73.99113875189038},
    {\"lat\":40.76215253220719,\"lng\":-73.9954302863142}]",
)
route1c = Route.create!(title: "Operator's morning jog", total_time: 172.10, activity: "run", 
  distance: 38.60, description: "Enjoy a B-E-A-utiful run enjoyed by our finest, bring salt", start_point: "Fort Bragg, secret entrance(???)", 
  end_point: "Space, ???", user_id: user2.id, 
  route_data: "[{\"lat\":40.752729389014036,\"lng\":-73.97302731434371},
    {\"lat\":40.77155823447017,\"lng\":-73.95738716078131},
    {\"lat\":40.77110322424062,\"lng\":-73.95103568983404},
    {\"lat\":40.763497591990635,\"lng\":-73.95601386976568},
    {\"lat\":40.76047425419751,\"lng\":-73.95880382234932},
    {\"lat\":40.76183949387391,\"lng\":-73.96318118746163},
    {\"lat\":40.7551430497976,\"lng\":-73.9680735367048},
    {\"lat\":40.75312748310777,\"lng\":-73.96635692293526},
    {\"lat\":40.75189210557964,\"lng\":-73.972794224571}]",
)
route2 = Route.create!(title: "Styx River Dip", total_time: 5.01, 
  activity: "swim", distance: 999.0, description: "Don't drink the water", 
  start_point: "Feneos", end_point: "Styx", user_id: user2.id,
  route_data: "[{\"lat\":40.76849971112999,\"lng\":-73.9818706338269},
    {\"lat\":40.79935332215627,\"lng\":-73.95807410034756},
    {\"lat\":40.796104540669006,\"lng\":-73.949147708746},
    {\"lat\":40.7647368541384,\"lng\":-73.97253933068684},
    {\"lat\":40.76681707475147,\"lng\":-73.97923412438801}]",
)
route2a = Route.create!(title: "Weekly Ruck", total_time: 174.23, 
  activity: "run", distance: 12.25, description: "Carbo-load the night before and Hydrate because you WILL sweat", 
  start_point: "Fort Bragg, Gruber rd (range road intersection)", 
  end_point: "Range Road exit", user_id: demo.id, 
  route_data: "[{\"lat\":40.770025346132165,\"lng\":-73.98027651772944},
  {\"lat\":40.7991480749205,\"lng\":-73.95753716474034},
  {\"lat\":40.79654905441426,\"lng\":-73.94895409589269},
  {\"lat\":40.76535287175017,\"lng\":-73.96989678388097},
  {\"lat\":40.76613295487984,\"lng\":-73.9767632389591}]",
)

route3 = Route.create!(title: "Inferno to Paradiso", total_time: 168.12,
  activity: "run", distance: 588.01, description: "From a little spark may burst a flame",
  start_point: "First Circle of Hell", end_point: "9th Sphere", user_id: user3.id,
  route_data: "[{\"lat\":40.799629523774925,\"lng\":-73.94705904413505},
    {\"lat\":40.804957159048264,\"lng\":-73.95701540399833},
    {\"lat\":40.8105442195199,\"lng\":-73.95220888544364},
    {\"lat\":40.8130127708126,\"lng\":-73.95598543573661},
    {\"lat\":40.819768336281584,\"lng\":-73.95049227167411},
    {\"lat\":40.811713544738595,\"lng\":-73.93864763666434},
    {\"lat\":40.8045673465778,\"lng\":-73.94259584833426}]",

)
route3a = Route.create!(title: "Combat Fitness", total_time: 134.18,
  activity: "run", distance: 3.80, description: "Train like you will fight",
  start_point: "Fort Bragg, Nasty Nick obstacle course", 
  end_point: "Fort Bragg, Nasty Nick obstacle course end", 
  user_id: user3.id,
  route_data: "[{\"lat\":40.81160055762008,\"lng\":-73.94657135009766},
    {\"lat\":40.821493455341795,\"lng\":-73.93810551126082},
    {\"lat\":40.813958553239154,\"lng\":-73.91664783914167},
    {\"lat\":40.79685539290088,\"lng\":-73.91915878906443},
    {\"lat\":40.80764061310854,\"lng\":-73.94576630249216}]",
)
route3b = Route.create!(title: "Classified", total_time: 1159.32,
  activity: "run", distance: 120.00, description: "Classified",
  start_point: "???", end_point: "???", user_id: user4.id,
  route_data: "[{\"lat\":40.75673891024896,\"lng\":-73.9320029264746},
    {\"lat\":40.734109584778516,\"lng\":-73.89801397383788},
    {\"lat\":40.723182327091344,\"lng\":-73.94779577315428},
    {\"lat\":40.75179753082958,\"lng\":-73.93715276778319}]",
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


