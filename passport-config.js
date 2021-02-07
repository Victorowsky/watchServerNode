const passport = require("passport");
const UserSchema = require("./Schemas/UserSchema");
const twitchStrategy = require("passport-twitch-strategy").Strategy;

require("dotenv").config();

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (user, done) {
  UserSchema.findById(user.id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  "twitch",
  new twitchStrategy(
    {
      clientID: "h7bv9w0er1y3qcgwhv14ftt3x28quh",
      clientSecret: "nkmu6qtxbllfr6dthh2rmzstmzkt4y",
      callbackURL: "http://localhost:3001/twitch/callback",
      scope: "user:edit",
    },
    function (accessToken, refreshToken, profile, done) {
      UserSchema.findOrCreate(
        { twitchId: profile.id, login: profile.login },
        function (err, user) {
          return done(err, user);
        }
      );

      //   return done(null, profile);
    }
  )
);
