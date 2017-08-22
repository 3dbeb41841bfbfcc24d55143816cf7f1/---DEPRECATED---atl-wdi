require 'ostruct'
require 'Date'

# 1. Find the first user who signed up for our app:

users = [
    {
        username: 'batman',
        created_at: Date.new(2001,2,3)
    },
    {
        username: 'alfred',
        created_at: Date.new(2014,7,23)
    },
    {
        username: 'robin',
        created_at: Date.new(1995,4,14)
    }
]

first_user = users.min_by do |user|
    user[:created_at]
end

puts '###############################'
puts '#1: '
puts first_user

# 2. Find the first customer's account balance

customers = [
    OpenStruct.new(
        credits: [
            OpenStruct.new(
                amount: 45.99
            ),
            OpenStruct.new(
                amount: 9.99
            )
        ],
        debits: [
            OpenStruct.new(
                amount: 34.99
            ),
            OpenStruct.new(
                amount: 24.99
            )
        ]
    ),
    OpenStruct.new(
        credits: [
            OpenStruct.new(
                amount: 35.99
            ),
            OpenStruct.new(
                amount: 75.99
            )
        ],
        debits: [
            OpenStruct.new(
                amount: 346.99
            ),
            OpenStruct.new(
                amount: 1.99
            )
        ]
    )
]

first_customer = customers.first

first_customer_total_credits = first_customer.credits.map do |credit|
    credit.amount
end.reduce(:+)

first_customer_total_debits = first_customer.debits.map do |debit|
    debit.amount
end.reduce(:+)

first_customer_account_balance = first_customer_total_credits - first_customer_total_debits

puts '###############################'
puts '#2: '
puts first_customer_account_balance

# 3. Remove hair care products from the database

products = [
    {
        category: 'SPORTS'
    },
    {
        category: 'MOVIES'
    },
    {
        category: 'MOVIES'
    },
    {
        category: 'HAIR_CARE'
    },
    {
        category: 'SPORTS'
    },
    {
        category: 'HAIR_CARE'
    }
]

no_hair_care_products = products.reject do |product|
    product[:category].upcase == 'HAIR_CARE'
end

puts '###############################'
puts '#3: '
puts no_hair_care_products

# 4. If any item in the array is a number, change it to a String
# e.g. [1, 2, 'blah'] ===> ['1', '2', 'blah']

things = [23, 43, 'strawberry', 'ruby', 234643234, 'another red thing', 1337]

string_things = things.map {|thing| thing.to_s}

puts '###############################'
puts '#4: '
puts string_things.to_s

# 5. Sort customers alphabetically by first and last name:

customers = [
    OpenStruct.new(
        first_name: 'Betty',
        last_name: 'White'
    ),
    OpenStruct.new(
        first_name: 'Alan',
        last_name: 'Arkin'
    ),
    OpenStruct.new(
        first_name: 'Alan',
        last_name: 'Alda'
    )
]

sorted_customers = customers
                        .sort_by {|customer| customer.first_name}
                        .sort_by {|customer| customer.last_name}
    
puts '###############################'
puts '#5: '
puts sorted_customers

# 6. Return all decorations with  in their description

decorations = [
    {
        description: 'Blue birthday hat'
    },
    {
        description: 'red balloon'
    },
    {
        description: 'yellow candles'
    },
    {
        description: 'blue confetti'
    }
]

blue_decorations = decorations.find_all do |decoration| 
    decoration[:description].upcase.include?('BLUE')
end 
    
puts '###############################'
puts '#6: '
puts blue_decorations