const passport = require("passport");
require("dotenv").config();
const twitchStrategy = require("passport-twitch-strategy").Strategy;

const UserSchema = require("./Schemas/UserSchema");

passport.use(
	new twitchStrategy(
		{
			clientID: process.env.TWITCH_CLIENT_ID,
			clientSecret: process.env.TWITCH_CLIENT_SECRET,
			callbackURL: `https://video.legga.pl/auth/twitch/callback`,
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
