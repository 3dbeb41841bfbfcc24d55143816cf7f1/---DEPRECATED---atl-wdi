var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

// USERS INDEX ROUTE

router.get('/', (req, res) => {

    User.find({})
        .then((users) => {
            console.log(users[0].id);
            res.render('users/index', {
                users:users
            });
        })
        .catch((err) => { 
            console.log(`ERROR! ${err}`)
        })

})


// USER CREATE FORM

router.get('/new', (req, res) => {
    res.render('users/new', {
        
    })
})

// USER CREATE ROUTE

router.post('/', (req, res) => {

    const newUser = new User(req.body);
    newUser.save()
        .then((newUser) => {
            console.log('New User Created');
            res.render('users/show', {
                user: newUser
            })
        })
        .catch((err) => {
            if (err) {
                console.log(err);
            }
        })
    });


// USER SHOW ROUTE

//597798b2fd40432ef5f05f58

router.get('/:id', (req, res) => {

    const userId = req.params.id;

    User.findById(userId)
        .then((user) => {
            res.render('users/show', {
                user: user
            })
        })

    // res.send("You looked for someone!");

})

// USER UPDATE ROUTE

router.get('/:id/edit', (req, res) => {
    const userId = req.params.id;
    User.findById(userId)
        .then((user) => {
            res.render('users/edit', {
                user: user
            });
        })
    });

router.put('/:id', (req, res) => {
    const updatedUserInfo = req.body;
    const userId = req.params.id;
    User.findByIdAndUpdate(
        userId,
        updatedUserInfo,
        {new: true}
    ).then((user) => {
        console.log(`User with ID of ${user.id} updated!`)

        res.render('users/show', {
            user
        })
    })

})

// USER DESTROY

router.get('/:id/delete', (req, res) => {
    const userIdToDelete = req.params.id;
    User.findByIdAndRemove(userIdToDelete)
        .then(() => {
            console.log("Successfully deleted user with Id" + userIdToDelete)
            res.redirect('/users');
        })
        .catch((err) => {
            console.log(err);
        })

})

// ADD A NEW ITEM

// REMOVE AN ITEM

module.exports = router;
