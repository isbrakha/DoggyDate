const express = require("express");
const router = express.Router();
const dogCtrl = require("../controllers/dogs");

/*Get  */
//router.get("/dogs/new", dogCtrl.new);
router.post("/dogs", dogCtrl.create);
router.get("/dogs", dogCtrl.index);

module.exports = router;