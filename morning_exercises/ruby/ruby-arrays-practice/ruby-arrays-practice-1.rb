require 'ostruct'

#  Ruby Map Practice

#  1. Return an array of each Person's full name, upper-cased

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

upper_case_full_names = []


#   2. Find the first order for each user

users = [
    OpenStruct.new(
        name: 'Tim',
        orders: [
            OpenStruct.new(
                description: 'a bike'
            )
        ]
    ),
    OpenStruct.new(
        name: 'Jim',
        orders: [
            OpenStruct.new(
                description: 'bees'
            ),
            OpenStruct.new(
                description: 'fishing rod'
            )
        ]
    ),
    OpenStruct.new(
        name: 'Slim',
        orders: [
            OpenStruct.new(
                description: 'a MacBook'
            ),
            OpenStruct.new(
                description: 'The West Wing DVDs'
            ),
            OpenStruct.new(
                description: 'headphones'
            ),
            OpenStruct.new(
                description: 'a kitten'
            )
        ]
    )
]

first_order_for_each_user = []


#   3. Find the average amount spent on coffee, per transaction, for each person

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

coffee_average_per_person = []


#   4. Find the most expensive product for each store, with the store name:

# EXAMPLE:
# {
#   store_name: 'Best Buy',
#     most_expensive_product: {
#       description: 'iPhone',
#       price: 799.99
#     }
# }


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
        store_name: 'Target',
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
        store_name: 'Amazon',
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

most_expensive_products_by_store = []