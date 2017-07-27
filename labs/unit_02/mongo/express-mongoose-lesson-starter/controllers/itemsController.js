const express = require('express');

const User = require("../models/user");
const Item = require("../models/item");

const router = express.Router({mergeParams: true});



router.get('/:itemId', (req, res) => {
    const userId = req.params.userId;
    const itemId = req.params.itemId;

    User.findById(userId)
        .then((user) => {
            const foundItem = user.items.find((item) => {
            // const foundItems = user.items.filter((item) => {})
                return item.id === itemId
            });

            res.render('items/show', {
                itemId,
                itemName: foundItem.name,
                userId,
                userName: user.first_name
            }); 

        })
        .catch((err) => {
            console.log(err);
        })
})

//ROUTE THAT RENDERS 

router.get('/:itemId/edit', (req, res) => {
    const userId = req.params.userId;
    const itemId = req.params.itemId;

    User.findById(userId)
    .then((user) => {
        const foundItem = user.items.find((item) => {
            return item.id === itemId
        })
        res.render('items/edit', {
            itemId,
            userId,
            itemName: foundItem.name,
            userName: user.first_name

        })
    })
})

router.put('/:itemId', (req, res) => {
    const userId = req.params.userId;
    const itemId = req.params.itemId;

    User.findById(userId)
    .then((user) => {
        const foundItem = user.items.find((item) => {
            return item.id === itemId;
        })
        foundItem.name = req.body.name;

        user.save()
        .then((user) => {
            console.log("updated user with ID of " + user._id)

            res.render(
                'items/index',
                {
                    user,
                    userId: user._id,
                    userName: user.first_name,
                    items: user.items
                }
            )
        })

        })
    })


router.get('/', (req, res) => {
    const userIdToFind = req.params.userId;

    User.findById(userIdToFind)
    .then((user) => {

        const items = user.items;

        res.render('items/index', {
            items,
            user,
            userId: user._id
        })
    })
})


router.get('/:itemId/delete', (req, res) => {
    const userId = req.params.userId;
    const itemId = req.params.itemId;

    User.findById(userId)
    .then((user) => {
        const arrayToDelete = user.items;
        const itemToDelete = user.items.find((item) => {
            return item.id === itemId;
        })
        const indexToDelete = user.items.indexOf(itemToDelete);
        var newArray = arrayToDelete.splice(indexToDelete, 1);

        user.save().then((user) => {
            res.render('items/index', {
            items: user.items,
            user,
            userId: user._id
        })
        })
    
        
    })
})




module.exports = router;