const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')
const mongoose = require('mongoose')

const User = mongoose.model('users')

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, cb) => {
      try {
        User.findOne({ googleId: profile.id }).then(existingUser => {
          if (existingUser) return
          new User({ googleId: profile.id }).save()
        })
      } catch (err) {
        throw new Error('Can not create a new user. ', err)
      }
    }
  )
)
