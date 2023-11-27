const express = require("express");
const router = express.Router();
const usersCtrl = require("../controllers/users");
// const userSchema = require("../models/user");
router.get("/", usersCtrl.getAllDogs);
// const usersCtrl = require('../controllers/users')
/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });
// router.get('/', function(req, res, next) {
//     res.redirect('/users')
// });

// router.get("/users/new", usersCtrl.new);

// router.get("/users", (req, res) => {
//   res.render("users", { dogs });
// });

// router.get('/users', async (req, res) => {
//   try {
//     // Fetch all users from the database
//     const users = await userSchema.find();

//     // Render the EJS template with the user data
//     res.render('users', { users });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });


module.exports = router;
