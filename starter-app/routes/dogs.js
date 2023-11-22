const express = require('express');
const router = express.Router();
const dogsCtrl = require("../controllers/dogs")

router.get('/new', dogsCtrl.new)

module.exports = router;
