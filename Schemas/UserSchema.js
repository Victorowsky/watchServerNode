const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

const { Schema } = mongoose;

const UserSchema = new Schema({
  twitchId: { type: String },
  login: { type: String },
  image: { type: String },
});

UserSchema.plugin(findOrCreate);

module.exports = mongoose.model("users", UserSchema);
