const passport = require("passport");
require("dotenv").config();
const twitchStrategy = require("passport-twitch-strategy").Strategy;

const UserSchema = require("./Schemas/UserSchema");

const websiteURL = "https://boiling-bastion-80662.herokuapp.com";
// const websiteURL = "http://localhost:3001";

passport.use(
  new twitchStrategy(
    {
      clientID: process.env.TWITCH_CLIENT_ID,
      clientSecret: process.env.TWITCH_CLIENT_SECRET,
      callbackURL: `${websiteURL}/auth/twitch/callback`,
      scope: "user_read",
    },
    function (accessToken, refreshToken, profile, done) {
      // Suppose we are using mongo..
      const { id, profile_image_url, displayName } = profile;
      UserSchema.findOrCreate(
        { twitchId: id, login: displayName, image: profile_image_url },
        function (err, user) {
          return done(err, user);
        }
      );
    }
  )
);
