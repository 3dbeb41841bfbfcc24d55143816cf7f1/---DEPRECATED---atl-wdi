#Booleans
# a = true
# b = false
# puts a = b 
# puts a != b

#Nil
# p = nil 
# puts p
 puts "#{p}  was here"
# puts p.class

#Ints
# d = 4
# puts d
# e = 2.0
# puts e
# d = e 
# puts d

#Strings
# christine = "Hi, I'm Christine"
# likesTo = "Long walks on the beach, kinda."
# puts "#{christine}  and I like  #{likesTo}"
# g = "2"
# gToNumber = 2 

# puts gToNumber + g.to_i

#Input/Output

# puts "Give me a number"
# input = gets.chomp.to_i * 2
# puts "Entry times 2 equals: #{input}"

# puts "What yo name is"
# name = gets.chomp
# puts "What yo job is"
# what_do = gets.chomp
# puts "#{name} is a #{what_do}."

#Arrays 
# myFirstArray = []
# myFirstArray = ["a", "b", "c", "d", "e", 1, 2, 3, 4]
# puts myFirstArray.last
# puts myFirstArray.first 
# myFirstArray[1] = "Joe"
# myFirstArray[2] = 3
# myFirstArray.push(true)
# myFirstArray.push(myFirstArray[3].class)

#Hashes
# myFavoriteAnimals = {
#     :Edgar => "donkey",
#     :Bill => "platypus",
#     :Bob => "horse",
#     :Hank => "mouse",
#     :Joe => "shrew"
# }
# myFavoriteAnimals[:Edgar] = "bear"
# puts myFavoriteAnimals

# myFavoriteMovies = {

# }
# myFavoriteMovies[:StarWars] = "awesome"
# puts myFavoriteMovies

#Ranges
# firstRange = (1..10)
# range_to_arr = firstRange.to_a
# second_range = (1...1000)
# second_range_to_array = second_range.to_a

# firstRange.each do |num|
#     num_to_str = num.to_s
#     puts num_to_str
# end

# x = 0
# numbers = []

# while x < 50
#     numbers.push(second_range_to_array[x])
#     x += 1
# end

# puts numbers

# range_times_two=[]

# firstRange.each do |num|
#     range_times_two.push(num * 2)
# end

# puts range_times_two

# odd_strings = firstRange.map do |num|
#     if num.even?
#         num.to_s
#     else
#         num
#     end
# end

# puts odd_strings

# Sum of natural numbers

# sum = 0
# (1..1000).each do |num|
#     if num % 3 != 0 || num % 5 != 0
#         next
#     else
#         sum += num
#     end
# end

# puts sum

# Prime numbers

def check_prime(num)
    puts Prime.instance.prime?(num)
end

check_prime(19)



