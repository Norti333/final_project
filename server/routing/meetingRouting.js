const express = require("express");
const router = express.Router();

const passport = require("../models/Passport");
const User = require("../models/UserModel");
const Meeting = require("../models/MeetingModel");

const routeHandler = function(res) {
  return function(err, data) {
    if (err) {
      return err;
    }
    res.send(data);
  };
};

//* Create Authentication Middleware
const ensureAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    ensureAuthenticated;
    return res.status("401").send({ message: "Unauthorized" });
  }
};

//!  The /meetings Routes Go Here
//* 1 - Get all Meetings
router.get("/", ensureAuthenticated, function(req, res) {
  if (req.user) {
    if (req.user.admin) {
      Meeting.find(routeHandler(res));
    } else {
      res.send("Not an Admin");
    }
  } else {
    res.send("No Current User");
  }
});

//* 2 - Get User Meeting(s)
router.get("/:userId", ensureAuthenticated, function(req, res) {
  if (req.user) {
    User.findById(req.params.userId)
      .populate("meetings")
      .exec(function(err, data) {
        if (err) {
          return err;
        }
        res.send(data);
      });
  } else {
    res.send("No Current User");
  }
});

//* 3 - Create a Meeting
router.post("/newmeeting", ensureAuthenticated, function(req, res) {
  if (req.user) {
    let meeting = new Meeting(req.body);
    meeting.save();
    User.findById(meeting.menteeId, function(err, data) {
      if (err) {
        return err;
      }
      data.meetings.push(meeting._id);
      data.save();
      User.findById(meeting.mentorId, function(err, data) {
        if (err) {
          return err;
        }
        data.meetings.push(meeting._id);
        data.save();
        res.send(meeting);
      });
    });
  } else {
    res.send("No Current User");
  }
});

//* 4 - Delete a Meeting
router.delete("/deletemeeting/:meetingId", ensureAuthenticated, function(
  req,
  res
) {
  if (req.user) {
    Meeting.findByIdAndRemove(req.params.meetingId, function(err, data) {
      if (err) {
        return err;
      }
      let meeting = data;
      User.findById(meeting.menteeId, function(err, data) {
        if (err) {
          return err;
        }
        let index1 = data.meetings.indexOf(meeting._id);
        data.meetings.splice(index1, 1);
        data.save();
        User.findById(meeting.mentorId, function(err, data) {
          if (err) {
            return err;
          }
          let index2 = data.meetings.indexOf(meeting._id);
          data.meetings.splice(index2, 1);
          data.save();
          res.send(meeting);
        });
      });
    });
  } else {
    res.send("No Current User");
  }
});

module.exports = router;
