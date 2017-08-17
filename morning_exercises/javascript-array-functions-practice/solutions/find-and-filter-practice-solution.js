// 1
const people = [
  {
    firstName: 'Ben',
    lastName: 'Kenobi',
  },
  {
    firstName: 'Tim',
    lastName: 'Cook',
  },
  {
    firstName: 'Etta',
    lastName: 'James',
  },
  {
    firstName: 'Jill',
    lastName: 'Kenobi',
  },
];

const kenobis = people.filter((person) => {
  // we can use .toUpperCase() to avoid missing search
  // results due to improper casing in our data
  return person.lastName.toUpperCase() === 'KENOBI';
});

console.log(kenobis);

// 2
const morePeople = [
  {
    firstName: 'Ben',
    lastName: 'Kenobi',
  },
  {
    firstName: 'Tim',
    lastName: 'Cook',
  },
  {
    firstName: 'Etta',
    lastName: 'James',
  },
  {
    firstName: 'Jill',
    lastName: 'Kenobi',
  },
];

const jillKenobi = morePeople.find((person) => {
  return (
      person.firstName.toUpperCase() === 'JILL'
      && person.lastName.toUpperCase() === 'KENOBI'
  );
});

console.log(jillKenobi);

// 3

const customers = [
  {
    name: 'Ben Kenobi',
    balance: 0.00,
  },
  {
    name: 'Tim Cook',
    balance: 1221344.99,
  },
  {
    name: 'Etta James',
    balance: 0.00,
  },
  {
    name: 'Jill Kenobi',
    balance: 42.77,
  },
];

const customersWhoOweMeMoney = customers.filter((customer) => {
  return customer.balance > 0;
});

console.log(customersWhoOweMeMoney);

// 4

const books = [
  {
    id: 'BADSFJ5332',
    title: 'Test Driven Development: By Example',
  },
  {
    id: '1234566',
    title: 'The Pragmatic Programmer',
  },
  {
    id: 'LASKJDG93893',
    title: 'Database Design for Mere Mortals',
  },
  {
    id: '1234ABCD',
    title: 'The Clean Coder',
  },
];

const myFavoriteBook = books.find((book) => {
  return book.id === '1234ABCD';
});

console.log(myFavoriteBook);

// 5

const moreBooks = [
  {
    id: 'BADSFJ5332',
    title: 'Test Driven Development: By Example',
    year: 2002,
  },
  {
    id: '1234566',
    title: 'The Pragmatic Programmer',
    year: 1999,
  },
  {
    id: 'LASKJDG93893',
    title: 'Database Design for Mere Mortals',
    year: 2013,
  },
  {
    id: '1234ABCD',
    title: 'The Clean Coder',
    year: 2011,
  },
];

const recentBooks = moreBooks.filter((book) => {
  return book.year > 2010;
});

console.log(recentBooks);

// 6
const orders = [
  {
    orderName: 'An Order',
    items: [
      {
        price: 12.10,
        quantity: 4,
      },
      {
        price: 50.43,
        quantity: 1,
      },
    ],
  },
  {
    orderName: 'Another Order',
    items: [
      {
        price: 55.43,
        quantity: 1,
      },
      {
        price: 1.45,
        quantity: 2,
      },
    ],
  },
  {
    orderName: 'A Third Order',
    items: [
      {
        price: 23.56,
        quantity: 3,
      },
    ],
  },
];

const ordersWithFreeShipping = orders.filter((order) => {
  const totalPrice = order.items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  const totalPriceWithTax = totalPrice * 1.07;

  if(totalPriceWithTax > 100) {
    return order;
  }
});

console.log(ordersWithFreeShipping);