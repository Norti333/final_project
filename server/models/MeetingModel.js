var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MeetingSchema = new Schema({
    date: Date,
    menteeId: String,
    mentorId: String
});

var Meeting = mongoose.model("Meeting", MeetingSchema);

module.exports = Meeting;