var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var plm = require("passport-local-mongoose");

var sessionSchema = new Schema({
    date: Date,
    time: Number
});

var UserSchema = new Schema({
  username: String,
  password: String,
  admin: Boolean,
  activeSessions: [sessionSchema],
  completedSessions: [sessionSchema]
});

UserSchema.plugin(plm);

var User = mongoose.model("User", UserSchema);

module.exports = User;
