var express = require("express");
var router = express.Router();
var passport = require("../models/Passport");
var User = require("../models/UserModel");
var Meeting = require("../models/MeetingModel");

var routeHandler = function(res) {
  return function(err, data) {
    if (err) {
      return err;
    }
    res.send(data);
  };
};

//* Create Authentication Middleware
var ensureAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.status("401").send({ message: "Unauthorized" });
  }
};

//*  The /auth Routes Go Here

//* 1 - Register New Users and Log them in
router.post("/register", function(req, res, next) {
  let temp = req.body.username;
  if (
    temp === "mosh" ||
    temp === "michael" ||
    temp === "david" ||
    temp === "gary"
  ) {
    var admin = true;
  } else {
    var admin = false;
  }
  User.register(
    new User({
      username: req.body.username,
      admin: admin,
      mentor: req.body.mentor,
      name: req.body.name,
      bio: req.body.bio,
      profilePic: req.body.profilePic,
      industries: req.body.industries,
      meetings: []
    }),
    req.body.password,
    function(err, user) {
      if (err) {
        console.log("Error Registering!", err);
        return next(err);
      }
      req.login(user, function(err) {
        if (err) {
          return next(err);
        }
        res.send(req.user);
      });
    }
  );
});

//* 2 - Login Users
router.post("/login", passport.authenticate("local"), function(req, res) {
  //* If this function gets called, authentication was successful.
  //* `req.user` contains the authenticated user.
  User.findOne({ username: req.user.username }, function(err, user) {
    res.send(user);
  });
});

//* 3 - Check for a Logged In User
router.get("/getUsers", ensureAuthenticated, function(req, res) {
  if (req.user) {
    let temp = {};
    temp.currentUser = req.user;
    User.find(function(err, data) {
      if (err) {
        return err;
      }
      temp.allUsers = data;
      res.send(temp);
    });
  } else {
    res.send("No Current User");
  }
});

router.get("/meetings", function(req, res) {
  Meeting.find(routeHandler(res));
});

router.get("/meetings/:userId", function(req, res) {
  User.findById(req.params.userId)
    .populate("meetings")
    .exec(function(err, data) {
      if (err) {
        return err;
      }
      res.send(data);
    });
});

//* 4 - Logout Users
router.get("/logout", function(req, res) {
  req.logout();
  res.send("Logged Out");
});

module.exports = router;
