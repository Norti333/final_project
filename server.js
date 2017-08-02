const express = require("express");
const expressSession = require("express-session");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const passport = require("./server/models/Passport");
const authRouting = require("./server/routing/authRouting.js");
const os = require('os');
const nodeStatic = require('node-static');
const socketIO = require('socket.io');
const http = require('http');
const fileServer = new(nodeStatic.Server)();

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.CONNECTION_STRING || "mongodb://localhost/WoWApp",
  {
    useMongoClient: true
  }
);
const app = express();
app.use(express.static("./server/static/"));
app.use(express.static("./client/dist/"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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

//* Handle Browser refresh by redirecting to index.html
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./server/static/index.html"));
});

var server = app.listen(3000)

