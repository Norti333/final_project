const express = require("express");
const expressSession = require("express-session");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const passport = require("./server/models/Passport");
const userRouting = require("./server/routing/userRouting.js");
const chatRouting = require("./server/routing/chatRouting.js");
const meetingRouting = require("./server/routing/meetingRouting.js");

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.CONNECTION_STRING || "mongodb://localhost/FinalProject",
  {
    useMongoClient: true
  }
);

const app = express();

app.use(express.static("./server/static/"));
app.use(express.static("./client/dist/"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(
  expressSession({
    secret: "yourSecretHere",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/user", userRouting);
app.use("/chat", chatRouting);
app.use("/meeting", meetingRouting);

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
