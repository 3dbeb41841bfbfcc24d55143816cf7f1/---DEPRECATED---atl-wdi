# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Refrigerator.destroy_all

samsung = Refrigerator.create(location:"China" , brand: "Samsung", size:34.3, food: true, drink: true)
lg = Refrigerator.create(location:"South Korea", brand:"LG", size:31.0, food: true, drink: true)


burger = Food.create(name:"burger",weight:8,vegan:false)
pizza Food.create(name:"pizza", weight:5, vegan:false)

beer = Drink.create(name:"beer", size:12, alcoholic:true)
water = Drink.create(name:"water", size:20, alcoholic:false)