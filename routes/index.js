const express = require('express');
const router = express.Router();
const passport = require('passport');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index/signup')
});



router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email']
  }
));

router.get('/oauth2callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect(`/owners/${req.user._id}`);
  }
);


router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/');
  });
});

module.exports = router;