// const express = require('express');
// const router = express.Router();
// const dogsCtrl = require("../controllers/dogs")
// const multer = require('multer')
// const upload = multer({ dest: 'uploads/' })


// router.get('/owners/:id/dogs/new', dogsCtrl.new)
// router.post('/owners/:id/dogs', upload.array('pictures'), dogsCtrl.create)

// module.exports = router;
const express = require("express");
const router = express.Router();
const dogsController = require("../controllers/dogsController.js");

router.get("/", dogsController.getAllDogs);

module.exports = router;