var express = require("express");
var router = express.Router();
var passport = require("../models/Passport");
var User = require("../models/UserModel");

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
      admin: admin
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
router.get("/currentuser", ensureAuthenticated, function(req, res) {
  if (req.user) {
    res.send(req.user);
  } else {
    res.send("No Current User");
  }
});

//* 4 - Logout Users
router.get("/logout", function(req, res) {
  req.logout();
  res.send("Logged Out");
});

module.exports = router;
