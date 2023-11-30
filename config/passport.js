const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Owner = require('../models/owner');

passport.use(new GoogleStrategy(
    // Configuration object
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK
    },
    // The verify callback function
    // Let's use async/await!
    async function(accessToken, refreshToken, profile, cb) {
        try {
            // A user has logged in with OAuth...
            let user = await Owner.findOne({ googleId: profile.id });
            // Existing user found, so provide it to passport
            if (user) return cb(null, user);
            // We have a new user via OAuth!
            user = await Owner.create({
              name: profile.displayName,
              googleId: profile.id,
              email: profile.emails[0].value,
              avatar: profile.photos[0].value
            });
            return cb(null, user);
          } catch (err) {
            return cb(err);
          }
    }
  ));

passport.serializeUser(function(user, cb) {
    cb(null, user._id);
  });

  passport.deserializeUser(async function(ownerId, cb) {
    cb(null, await Owner.findById(ownerId));
  });