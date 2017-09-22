//DO NOT TOUCH THIS CODE

const menu = [
  {
    name: "YOKOHAMA MAMA",
    price: 9.5,
    description: `Topped with teriyaki glaze, jack cheese, and a
    ring of grilled pineapple. Kono hanbāgā wa, sekkusu yori mo sugurete imasu!`
  },
  {
    name: "HOLY GUACAMOLE",
    price: 10.25,
    description: `Topped with jack cheese and a big glob of our
    freshly made guacamole. So simple, so pure –
    this is surely burger divinity.`
  },
  {
    name: "REBEL OUTLAW",
    price: 10.25,
    description: `Covered with pulled pork, cheddar cheese and
    bacon, all slathered in our spicy outlaw sauce,
    makes this burger so good, it’s criminal.`
  },
  {
    name: "SWISS & MUSHROOM",
    price: 9.5,
    description: `Okay, this is an IQ test. Can you guess what’s on
    this burger? Yeah, it’s topped with Swiss cheese
    and tasty sautéed mushrooms. Very good.`
  },
  {
    name: "HELL'S FURY",
    price: 10.25,
    description: `Pepper jack cheese, Atomic Death Sauce, habanero
    relish, and a roasted jalapeño all make this burger
    hotter than hell. Definitely not for sensitive souls.`
  },
  {
    name: "BIG BLUE BUFFALO",
    price: 10.5,
    description: `Drenched in our original Bad Ass Buffalo Wing
    sauce and topped with a big glob of our thick
    blue cheese spread. No celery sticks though.`
  },
  {
    name: "LONE STAR TEX MELT",
    price: 10.25,
    description: `Topped with cheddar cheese, barbecue sauce,
    and crispy onion rings, served on griddled Texas
    toast. Don’t mess with Texas.`
  },
  {
    name: "RAGIN' CAJUN",
    price: 9.5,
    description: `Topped with our zesty Cajun sauce and pepper
    jack cheese. Eat this burger and you’ll feel like you’re in N’awlins.`
  },
  {
    name: "BLUE 'SHROOM",
    price: 10.25,
    description: `Topped with our delicious, mind-expanding blue
    cheese spread, sautéed mushrooms, and bacon.
    It’s so tasty you might actually see God.`
  },
  {
    name: "BIG BAD VOODOO PATTY",
    price: 10.95,
    description: `Topped with our original chipotle cream cheese
    spread, four slices of bacon, and sweet and spicy
    green pepper jelly. It’ll put a spell on you.`
  },
  {
    name: "FAT ELVIS",
    price: 10.5,
    description: `Slathered with a King-sized helpin’ of smooth
    peanut butter, bacon, and fried bananas. Now
    that’s what we call Takin’ Care of Business.`
  },
  {
    name: "BLACK & BLUE",
    price: 9.5,
    description: `Coated with Cajun spices, and topped with blue
    cheese spread, this burger is so good it’ll knock
    you out. Don’t make us tell you twice.`
  },
  {
    name: "STEAK HOUSE",
    price: 10.25,
    description: `Topped with sautéed onions and mushrooms,
    Swiss and cheddar cheese, and our super-secret
    Vortex steak sauce. Sheer sirloin perfection.`
  },
  {
    name: "FOUR HORSEMEN",
    price: 10.25,
    description: `A blackened patty topped with horseradish sauce,
    grilled onions, sautéed mushrooms, and jack
    cheese. A divine revelation of zesty flavor.`
  }
];

const readMenu = () =>
  new Promise(function(resolve, reject) {
    const items = menu
      .map(item => `${item.name}: ${item.price}`)
      .join("\n    ");
    resolve(`
    Welcome to Promise Burgers!
    Please select one of our tasty treats:
    ${items}
  `);
  });

const order = name =>
  new Promise(function(resolve, reject) {
    setTimeout(() => {
      const item = menu.find(item => item.name === name.toUpperCase());
      if (item) {
        resolve(item);
      } else {
        reject("I'm sorry, we have any " + name);
      }
    }, 500);
  });

const addToMenu = newItem =>
  new Promise((resolve, reject) => {
    if (!newItem.name || !newItem.price || !newItem.description) {
      reject("Your item is missing a name, price, or description");
    }
    menu.push(newItem);
    resolve("Successfully added " + newItem.name + " to the menu.");
  });

module.exports = {
  readMenu,
  order,
  addToMenu
};
