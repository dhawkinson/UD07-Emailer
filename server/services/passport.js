'use strict';

//  node modules
const passport       = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose       = require('mongoose');

//  local modules
const keys           = require('../config/keys');

const User = mongoose.model('users');

//  NOTE: user.id = mongoDB _id, not the provider profile id
//  null is a placeholder for an error
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      // check to see if user exists
      const existingUser = await User.findOne({ provider: 'google', providerID: profile.id })
      // user exists, don't create a new one & return existing
      if (existingUser) {
        return done(null, existingUser);
      }
      // user doesn't exist, create & return a new user
      const user = await new User({ provider: 'google', providerID: profile.id, displayName: profile.displayName }).save()
      done(null, user);
    }
  )
);
