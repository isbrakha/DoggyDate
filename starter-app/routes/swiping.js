const express = require('express');
const router = express.Router();
const swipeCtrl = require("../controllers/swipe")

router.get('/owners/:ownerId/dogs/:dogId/swipe', swipeCtrl.startSwiping);

module.exports = router
