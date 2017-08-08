var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var plm = require("passport-local-mongoose");
var Meeting = require("./MeetingModel")

var UserSchema = new Schema({
  username: String,
  password: String,
  admin: Boolean,
  mentor: Boolean,
  name: String,
  bio: String,
  profilePic: String,
  industries: String,
  meetings: [{ type: Schema.Types.ObjectId, ref: 'Meeting' }]

});

UserSchema.plugin(plm);

var User = mongoose.model("User", UserSchema);

module.exports = User;
