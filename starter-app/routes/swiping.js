const express = require('express');
const router = express.Router();
const swipeCtrl = require("../controllers/swipe")

router.get('/owners/:ownerId/dogs/:dogId/swipe', swipeCtrl.startSwiping);
router.get('/owners/:ownerId/dogs/:dogId/swipe/:viewedDog', swipeCtrl.nextDog); 

router.get('/owners/:ownerId/dogs/:otherDogId/like', swipeCtrl.like); 

module.exports = router
