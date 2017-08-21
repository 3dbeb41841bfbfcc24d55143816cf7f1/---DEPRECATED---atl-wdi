var express = require('express');
var router = express.Router();

var User = require('../models/user');
var Item = require('../models/item');

// USERS INDEX ROUTE
router.get('/', (request, response) => {
  User.find({}).then((users) => {
    response.render(
        'users/index',
        { users },
    );
  }).catch((error) => {
    console.log('Error retrieving users from database!');
    console.log(error);
  });
});

// RENDER THE USER CREATE 'NEW' FORM
router.get('/new', (request, response) => {
  response.render('users/new');
});

// USER CREATE ROUTE
// REMEMBER: if you set the `name=""` attribute of your form
// inputs to match the schema for your object, you can simply
// pass the request body into the constructor for your Mongoose
// object
router.post('/', (request, response) => {

  const newUserInfoFromForm = request.body;

  // If the form body already contains everything you need for your user
  // you can just do this:
  User.create(newUserInfoFromForm).then((user) => {
    response.render(
        'users/show',
        {user},
    );
  }).catch((error) => {
    console.log('Error saving new user to database!');
    console.log(error);
  });

  // OR If you want to add more information to the user before
  // you save, you can use the commented-out code below:

  // const newUser = new User(request.body);

  // newUser.save()
  //     .then((newUser) => {
  //         console.log(`New user created with ID of: ${newUser._id}`);

  //         response.render(
  //             'users/show',
  //             { user: newUser }
  //         );
  //     })
  //     .catch((error) => {
  //         console.log('Error saving new user to database!');
  //         console.log(error);
  //     });
});

// USER SHOW ROUTE
router.get('/:id', (request, response) => {
  const userIdToSearchDbFor = request.params.id;

  User.findById(userIdToSearchDbFor).then((user) => {
    console.log(user.items);
    response.render(
        'users/show',
        {
          user,
          userItems: user.items
        }
    );
  }).catch((error) => {
    console.log(`Error retrieving user with ID of ${userIdToSearchDbFor}`);
    console.log(error);
  });
});

// USER UPDATE ROUTE
router.put('/:id', (request, response) => {

  const userIdToUpdate = request.params.id;
  const updatedUserInfo = request.body;

  User.findByIdAndUpdate(
      userIdToUpdate,
      updatedUserInfo,
      {new: true} // <-- DON'T FORGET THIS!!!
  ).then((user) => {
    console.log(`User with ID of ${user._id} updated!`);

    response.render(
        'users/show',
        {user},
    );
  }).catch((error) => {
    console.log(`User with ID of ${user._id} failed to update!`);
    console.log(error);
  });

});

// USER DESTROY ROUTE
router.get('/:id/delete', (request, response) => {

  const userIdToDelete = request.params.id;

  User.findByIdAndRemove(userIdToDelete).then(() => {
    console.log(`Successfully deleted user with ID ${userIdToDelete}!`);

    response.redirect('/users');
  });
});

// RENDER EDIT FORM FOR USER
router.get('/:id/edit', (request, response) => {

  const userIdToFind = request.params.id;

  User.findById(userIdToFind).then((user) => {
    response.render(
        'users/edit',
        {user},
    );
  }).catch((error) => {
    console.log(`Error rendering edit form for user with ID of ${userIdToFind}`);
  });
});

module.exports = router;
