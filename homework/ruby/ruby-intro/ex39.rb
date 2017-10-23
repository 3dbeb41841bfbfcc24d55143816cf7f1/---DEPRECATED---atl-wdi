states = {
    "Oregon" => "OR",
    "Florida" => "FL",
    "California" => "CA",
    "New York" => "NY",
    "Michigan" => "MI"
}

cities = {
   "CA" => "San Francisco",
   "MI" => "Detroit",
   "FL" => "Jacksonville"
}

cities['NY'] = 'New York'
cities['OR'] = 'Portland'

puts '-' * 10
puts "Michigan's abbreviation is: #{states['Michigan']}"
puts "Florida's abbreviation is: #{states['Florida']}"

puts '-' * 10
states.each do |state, abbrev|
    puts "#{state} is abbreviated #{abbrev}"
end

puts '-' * 10 
states.each do |state, abbrev|
    city = cities[abbrev]
    puts "#{state} is abbreviated #{abbrev} and has city #{city}"
end

if !states
    puts "Sorry, no Texas"
end

city = cities['TX']
city ||= 'Does not exist'
puts "The city for the state of TX is: #{city}"