# `.find()` and `.filter()` Practice:

1. Find ALL people with a last name of "Kenobi":

	```javascript
    const people = [
        {
            firstName: 'Ben',
            lastName: 'Kenobi'
        },
        {
            firstName: 'Tim',
            lastName: 'Cook'
        },
        {
            firstName: 'Etta',
            lastName: 'James'
        },
        {
            firstName: 'Jill',
            lastName: 'Kenobi'
        }
    ];
	
    const kenobis = ???
	```
	
2. Find 'Jill Kenobi' from our array of people:

	```javascript
    const people = [
        {
            firstName: 'Ben',
            lastName: 'Kenobi'
        },
        {
            firstName: 'Tim',
            lastName: 'Cook'
        },
        {
            firstName: 'Etta',
            lastName: 'James'
        },
        {
            firstName: 'Jill',
            lastName: 'Kenobi'
        }
    ];
	
    const jillKenobi = ???
	```
	
3. Find ALL customers with an outstanding balance on their account: 

    ```javascript
    const customers = [
        {
            name: 'Ben Kenobi',
            balance: 0.00
        },
        {
            name: 'Tim Cook',
            balance: 1221344.99
        },
        {
            name: 'Etta James',
            balance: 0.00
        },
        {
            name: 'Jill Kenobi',
            balance: 42.77
        }
    ];
 
    const customersWhoOweMeMoney = ???
    ```
    
4. Find the Book with an ID of '1234ABCD':

    ```javascript
    const books = [
        {
            id: 'BADSFJ5332',
            title: 'Test Driven Development: By Example'
        },
        {
            id: '1234566',
            title: 'The Pragmatic Programmer'
        },
        {
            id: 'LASKJDG93893',
            title: 'Database Design for Mere Mortals'
        },
        {
            id: '1234ABCD',
            title: 'The Clean Coder'
        }
    ];

    const myFavoriteBook = ???
    ```

5. Find ALL books written after 2010:

    ```javascript
    const books = [
        {
            id: 'BADSFJ5332',
            title: 'Test Driven Development: By Example',
            year: 2002
        },
        {
            id: '1234566',
            title: 'The Pragmatic Programmer',
            year: 1999
        },
        {
            id: 'LASKJDG93893',
            title: 'Database Design for Mere Mortals',
            year: 2013
        },
        {
            id: '1234ABCD',
            title: 'The Clean Coder',
            year: 2011
        }
    ];

    const myFavoriteBook = ???
    ```
    
6. BONUS: Find any orders that qualify for free shipping. To qualify for free shipping, 
an order's total, including tax (assume a tax rate of 7%) must be greater than $100.00:

    ```javascript
    const products = [
        {
            orderName: 'An Order',
            items: [
                {
                    price: 12.10,
                    quantity: 4
                },
                {
                    price: 50.43,
                    quantity: 1
                }
            ]
        },
        {
            orderName: 'Another Order',
            items: [
                {
                    price: 55.43,
                    quantity: 1
                },
                {
                    price: 1.45,
                    quantity: 2
                }
            ]
        },
        {
            orderName: 'A Third Order',
            items: [
                {
                    price: 23.56,
                    quantity: 3
                }
            ]
        }
    ];
    
    const ordersWithFreeShipping = ???
    ```

