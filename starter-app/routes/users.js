const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// router.get('/', function(req, res, next) {
//     res.redirect('/users')
// });

router.get("/users/new", usersCtrl.new);



module.exports = router;