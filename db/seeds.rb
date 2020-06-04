# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all


demo = User.create!( f_name: "demo", l_name: "user", email: "demo@demo.com", 
  password: "password", birth_date: "01/02/1990", gender: "F", location: "USA"
)
user1 = User.create!( f_name: "user1", l_name: "user1", email: "user1@user.com", 
  password: "password", birth_date: "01/02/1990", gender: "F", location: "Morraco"
)
user2 = User.create!( f_name: "user2", l_name: "user2", email: "user2@user.com", 
  password: "password", birth_date: "05/12/1990", gender: "M", location: "Afghanistan"
)
user3 = User.create!( f_name: "user3", l_name: "user3", email: "user3@user.com", 
  password: "password", birth_date: "12/02/1970", gender: "F", location: "Libya"
)
user4 = User.create!( f_name: "user4", l_name: "user4", email: "user4@user.com", 
  password: "password", birth_date: "03/14/1992", gender: "M", location: "USA"
)
user5 = User.create!( f_name: "user5", l_name: "user5", email: "user5@user.com", 
  password: "password", birth_date: "06/01/1991", gender: "F", location: "Cairo"
)
