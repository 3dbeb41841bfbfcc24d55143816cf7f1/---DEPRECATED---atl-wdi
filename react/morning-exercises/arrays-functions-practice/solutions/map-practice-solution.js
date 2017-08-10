// 1
const lyrics = ['never', 'gonna', 'give', 'you', 'up'];

const uppercaseLyrics = lyrics.map((lyric) => {
  return lyric.toUpperCase();
});

console.log(uppercaseLyrics);

// 2
const people = [
  {
    name: 'George Michael',
    age: 14,
    title: 'Mr. Manager',
  },
  {
    name: 'T-Bone',
    age: 34,
    title: 'Arsonist',
  },
  {
    name: 'George Oscar',
    age: 32,
    title: 'Illusionist',
  },
];

const names = people.map((person) => {
  return person.name;
});

console.log(names);

// 3
const products = [
  {
    name: 'iPad',
    price: 549.99,
  },
  {
    name: 'iPhone',
    price: 799.99,
  },
  {
    name: 'iPod',
    price: 2.99,
  },
];

const tax = products.map((product) => {
  return product.price * .07;
});

console.log(tax);

// 4
const trip = [
  'Visit my parents',
  'Eat at Murray\'s',
  'Washington Square Park',
  'Take the Staten Island Ferry',
  'Whitney Museum'];

const shortenedTrip = trip.map((tripItem) => {
  if (tripItem.length > 20) {
    return `${tripItem.substring(0, 17)}...`;
  } else {
    return tripItem;
  }
});

console.log(shortenedTrip);

// 5
const possiblyVowels = [118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120, 106];

const definitelyVowels = possiblyVowels.map((code) => {
  const stringFromCode = String.fromCharCode(code);

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.includes(stringFromCode)) {
    return stringFromCode;
  }

  return code;
});

console.log(definitelyVowels);
