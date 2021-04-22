const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");
const { Schema } = mongoose;

const RoomSchema = new Schema({
	name: { type: String, required: true, unique: true },
	admin: { type: String },
	createdAt: { type: Date, expires: "300m", default: Date.now },
	currentVideoLink: String,
});
RoomSchema.plugin(findOrCreate);

module.exports = mongoose.model("rooms", RoomSchema);
