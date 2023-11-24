const express = require('express');
const router = express.Router();
const dogsCtrl = require("../controllers/dogs")

router.get('/owners/:id/dogs/new', dogsCtrl.new)
router.post('/owners/:id/dogs', dogsCtrl.create)

module.exports = router;
