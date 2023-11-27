const express = require('express');
const router = express.Router();
const dogsCtrl = require("../controllers/dogs")
const upload = require('../config/multer.js')



router.get('/owners/:id/dogs/new', dogsCtrl.new)
router.post('/owners/:id/dogs', upload.array('pictures'), dogsCtrl.create)

module.exports = router;
