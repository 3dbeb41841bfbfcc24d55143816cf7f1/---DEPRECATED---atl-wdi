const express = require('express');

const User = require('../models/user');
const Item = require('../models/item');

const router = express.Router({mergeParams: true});

// INDEX
router.get('/', (request, response) => {
  const userIdToFind = request.params.userId;

  User.findById(userIdToFind).then((user) => {
    response.render(
        'items/index',
        {
          userId: user._id,
          userName: user.first_name,
          items: user.items,
        },
    );
  });
});

// RENDER THE NEW FORM
router.get('/new', (request, response) => {
  const userId = request.params.userId;

  response.render(
      'items/new',
      {userId},
  );
});

// CREATE ROUTE
router.post('/', (request, response) => {
  const userId = request.params.userId;
  const newItemInfo = request.body;

  User.findById(userId).then((user) => {
    const newItem = new Item(newItemInfo);

    user.items.push(newItem);

    // RETURN the promise from user.save() so we can chain .then() blocks
    // and only end up with one .catch() block at the very end
    return user.save();

  }).then((user) => {
    console.log(`Saved new user with ID of ${user._id}`);

    response.render(
        'items/show',
        {
          userId,
          userName: user.first_name,
          itemId: newItem._id,
          itemName: newItem.name,
        },
    );
  }).catch((error) => {
    console.log(error);
  });
});

// SHOW
router.get('/:itemId', (request, response) => {
  const userId = request.params.userId;
  const itemId = request.params.itemId;

  User.findById(userId).then((user) => {

    const foundItem = user.items.find((item) => {
      return item.id === itemId;
    });

    response.render(
        'items/show',
        {
          userId,
          userName: user.first_name,
          itemId: foundItem._id,
          itemName: foundItem.name,
        },
    );
  }).catch((error) => {
    console.log(`Failed to find user with ID of ${userId}`);
    console.log(error);
  });
});

// RENDER THE EDIT FORM
router.get('/:itemId/edit', (request, response) => {
  const userId = request.params.userId;
  const itemId = request.params.itemId;

  User.findById(userId).then((user) => {
    const foundItem = user.items.find((item) => {
      return item.id === itemId;
    });

    response.render('items/edit', {
      userId,
      item: foundItem,
    });
  });
});

// UPDATE AN ITEM
router.put('/:itemId', (request, response) => {
  const userId = request.params.userId;
  const itemId = request.params.itemId;

  User.findById(userId).then((user) => {
    const foundItem = user.items.find((item) => {
      return item.id === itemId;
    });

    foundItem.name = request.body.name;

    // then save the user and return the promise so we can chain
    // another .then() block and only use one .catch() block
    return user.save();

  }).then((user) => {
    console.log(`updated user with ID of ${user._id}`);

    response.render(
        'items/index',
        {
          userId: user._id,
          userName: user.first_name,
          items: user.items,
        },
    );
  }).catch((error) => {
    console.log(`Failed to update item with ID of ${itemId}`);
    console.log(error);
  });
});

// DELETE 
router.get('/:itemId/delete', (request, response) => {
  const userId = request.params.userId;
  const itemId = request.params.itemId;

  User.findById(userId).then((user) => {
    //use Mongoose to remove the item from the user
    user.items.id(itemId).remove();

    // then save the user and return the promise so we can chain
    // another .then() block and only use one .catch() block
    return user.save();

  }).then((user) => {
    response.render(
        'items/index',
        {
          userId: user._id,
          userName: user.first_name,
          items: user.items,
        },
    );
  }).catch((error) => {
    console.log(`Failed to delete user with ID of ${userId}`);
    console.log(error);
  });
});

module.exports = router;