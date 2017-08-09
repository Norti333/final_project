const express = require("express");
const router = express.Router();
const OpenTok = require("opentok");

const passport = require("../models/Passport");

const apiKey = "45929252";
const apiSecret = "35e09c239d512dedf9ce33b0b51e1b99ee5f2bcf";
const opentok = new OpenTok(apiKey, apiSecret);

let names = [];

//* Create Authentication Middleware
const ensureAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.status("401").send({ message: "Unauthorized" });
  }
};

//!  The /chat Routes Go Here
//* 1 - Create a Chat Session
router.post("/startChat", ensureAuthenticated, function(req, res) {
  if (req.user) {
    let nameToFind = req.body.name;
    function findName(myName) {
      return myName.name === nameToFind;
    }
    let temp = names.find(findName);

    if (temp) {
      console.log("Room Name Already Exists.");
      res.send();
    } else {
      // ** Create a Session
      opentok.createSession(
        {
          mediaMode: "relayed"
        },
        function(err, session) {
          if (err) throw err;
          let sessionId = session.sessionId;

          //* Generate a New Token
          var tokenOptions = {
            role: "moderator"
          };
          let token = opentok.generateToken(sessionId, tokenOptions);

          let data = {
            apiKey: apiKey,
            sessionId: sessionId,
            token: token
          };

          names.push({
            name: nameToFind,
            sessionId: sessionId
          });

          res.send(data);
        }
      );
    }
  } else {
    res.send("No Current User");
  }
});

//* 2 - Join a Chat Session
router.post("/joinChat", ensureAuthenticated, function(req, res) {
  if (req.user) {
    let nameToFind = req.body.name;

    function findName(myName) {
      return myName.name === nameToFind;
    }
    let temp = names.find(findName);

    if (!temp) {
      console.log("Not A Valid Room Name");
      res.send();
    } else {
      let sessionId = temp.sessionId;
      let token = opentok.generateToken(sessionId);
      let data = {
        apiKey: apiKey,
        sessionId: sessionId,
        token: token
      };

      res.send(data);
    }
  } else {
    res.send("No Current User");
  }
});

module.exports = router;