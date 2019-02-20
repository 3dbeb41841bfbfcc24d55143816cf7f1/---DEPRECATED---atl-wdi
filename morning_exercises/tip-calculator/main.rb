# asking for subtotal
puts "What's your subtotal?"
subtotal = gets.chomp.to_f

puts subtotal

puts "number of people"
people = gets.chomp.to_f

puts people

puts %q {
how much tip to leave?
    1. 15%
    2. 18%
    3. 20%
    4. other
}

option = STDIN.get.chomp
puts option

case option 
    when "1"
        tip_percent = 0.15
    when "2"
        tip_percent = 0.18
    when "3"
        tip_percent = 0.20
    else 
        puts "invalid option, assuming 50% tip"
        tip_percent = 0.50
    end
    
    puts tip_percent
    
    puts "What is the tax percentage (eg 5, 6, 7)"
    tax_percent = gets.chomp.to_f

    puts tax_percent

    tax_value = subtotal * (tax_percent/100.0)

    # meal_with_tax = subtotal + tax_value
puts "tax value is #{tax_value}"
puts tax_value
tip_value = subtotal * tip_percent
puts tip_value

# total_value = meal_with_tax * tip_percent/100
# total = meal_with_tax + tip_value

total = subtotal + tax_value + tip_value
total_pp  = total/people

puts "total is #{total}"
puts "each person pays #{total_pp}"