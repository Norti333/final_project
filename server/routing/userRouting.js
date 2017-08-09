const express = require("express");
const router = express.Router();

const passport = require("../models/Passport");
const User = require("../models/UserModel");

//* Create Authentication Middleware
const ensureAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.status("401").send({ message: "Unauthorized" });
  }
};

//!  The /auth Routes Go Here
//* 1 - Register New Users and Log them in
router.post("/register", function(req, res, next) {
  let temp = req.body.username;
  let admin = "";
  if (
    temp === "mosh" ||
    temp === "michael" ||
    temp === "david" ||
    temp === "gary"
  ) {
    admin = true;
  } else {
    admin = false;
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

//* 3 - Logout Users
router.get("/logout", function(req, res) {
  req.logout();
  res.send("Logged Out");
});

//* 4 - Check for a Logged In User + Get all Users
router.get("/", ensureAuthenticated, function(req, res) {
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

module.exports = router;
