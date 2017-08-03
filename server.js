const express = require("express");
const expressSession = require("express-session");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const OpenTok = require("opentok");

const passport = require("./server/models/Passport");
const authRouting = require("./server/routing/authRouting.js");

const apiKey = "45929252";
const apiSecret = "35e09c239d512dedf9ce33b0b51e1b99ee5f2bcf";
let names = [];

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.CONNECTION_STRING || "mongodb://localhost/FinalProject",
  {
    useMongoClient: true
  }
);

const app = express();

const opentok = new OpenTok(apiKey, apiSecret);

app.use(express.static("./server/static/"));
app.use(express.static("./client/dist/"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

//* Configure passport and session middleware
app.use(
  expressSession({
    secret: "yourSecretHere",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

//* This tells the Server that when a request comes into '/auth'
//* it should use the routes in 'authRouting',
//* and those are in our new authRouting.js file
app.use("/auth", authRouting);

app.post("/startSession", function(req, res) {
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
});

app.post("/joinSession", function(req, res) {
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
});

//* Handle Browser refresh by redirecting to index.html
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./server/static/index.html"));
});

//* Start the Server
app.listen(process.env.PORT || 3000, () => {
  console.log(
    "Server is running on http://localhost:3000 or http://127.0.0.1:3000"
  );
});
