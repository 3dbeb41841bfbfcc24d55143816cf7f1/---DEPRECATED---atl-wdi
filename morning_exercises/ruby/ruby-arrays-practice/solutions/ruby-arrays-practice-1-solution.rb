require 'ostruct'

# 1

people = [
    OpenStruct.new(
        first_name: 'Jamie',
        last_name: 'King'
    ),
    OpenStruct.new(
        first_name: 'Danny',
        last_name: 'Hurley',
    ),
    OpenStruct.new(
        first_name: 'Maren',
        last_name: 'Woodruff',
    )
]

upper_case_full_names = people.map do |person|
  full_name = "#{person.first_name} #{person.last_name}"
  full_name.upcase
end

puts upper_case_full_names


# 2

users = [
    {
        name: 'Tim',
        orders: [
            {
                description: 'a bike'
            }
        ]
    },
    {
        name: 'Jim',
        orders: [
            {
                description: 'bees'
            },
            {
                description: 'fishing rod'
            }
        ]
    },
    {
        name: 'Slim',
        orders: [
            {
                description: 'a MacBook'
            },
            {
                description: 'The West Wing DVDs'
            },
            {
                description: 'headphones'
            },
            {
                description: 'a kitten'
            }
        ]
    }
]

first_order_for_each_user = users.map do |user|
  user[:orders].first
end

puts first_order_for_each_user


#   3. Find the average amount spent on coffee, per day, for each person

people = [
    OpenStruct.new(
        name: 'Tim',
        transactions: [
            OpenStruct.new(
                type: 'COFFEE',
                amount: 7.43
            ),
            OpenStruct.new(
                type: 'TACOS',
                amount: 14.65
            ),
            OpenStruct.new(
                type: 'COFFEE',
                amount: 4.43
            )
        ]
    ),
    OpenStruct.new(
        name: 'Tim',
        transactions: [
            OpenStruct.new(
                type: 'BIKES',
                amount: 800.00
            ),
            OpenStruct.new(
                type: 'TACOS',
                amount: 14.65
            ),
            OpenStruct.new(
                type: 'COFFEE',
                amount: 4.43
            )
        ]
    ),
    OpenStruct.new(
        name: 'Tim',
        transactions: [
            OpenStruct.new(
                type: 'COFFEE',
                amount: 7.43
            ),
            OpenStruct.new(
                type: 'COFFEE',
                amount: 100.00
            ),
            OpenStruct.new(
                type: 'COFFEE',
                amount: 4.43
            )
        ]
    )
]

coffee_average_per_person = people.map do |person|

  coffee_transaction_amounts_for_user = person.transactions.map do |transaction|
    transaction.type == 'COFFEE' ? transaction.amount : 0.00
  end

  coffee_transaction_sum = coffee_transaction_amounts_for_user.reduce(:+)

  number_of_coffee_transactions = person.transactions.count do |transaction|
    transaction.type === 'COFFEE'
  end

  OpenStruct.new(
      name: person.name,
      coffee_average: coffee_transaction_sum / number_of_coffee_transactions
  )

end

puts coffee_average_per_person

# 4

stores = [
    OpenStruct.new(
        store_name: 'Best Buy',
        products: [
            OpenStruct.new(
                description: 'Titanium',
                price: 9384.33
            ),
            OpenStruct.new(
                description: 'Gold',
                price: 345.54
            )
        ]
    ),
    OpenStruct.new(
        name: 'Target',
        products: [
            OpenStruct.new(
                description: 'Silver',
                price: 654.44
            ),
            OpenStruct.new(
                description: 'Ruby',
                price: 323.43
            )
        ]
    ),
    OpenStruct.new(
        name: 'Amazon',
        products: [
            OpenStruct.new(
                description: 'Opal',
                price: 345.43
            ),
            OpenStruct.new(
                description: 'Sapphire',
                price: 899.33
            )
        ]
    )
]

most_expensive_products_by_store = stores.map do |store|

  most_expensive_product = store.products.max_by do |product|
    product.price
  end

  OpenStruct.new(
      store_name: store.store_name,
      most_expensive_product: most_expensive_product
  )
end

puts most_expensive_products_by_store

