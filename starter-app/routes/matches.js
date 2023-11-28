const express = require('express');
const router = express.Router();
const matchesCtrl = require("../controllers/matches")
const upload = require('../config/multer.js')



router.get('/owners/:id/dogs/new', matchesCtrl.new)
router.post('/owners/:id/dogs', upload.array('pictures'), matchesCtrl.create)

module.exports = router;