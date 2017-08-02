import React from "react";
import { Switch, Route } from "react-router-dom";
import FinalProject from "./FinalProject";
import User from "./FinalProject/User.js";
import Mentor from "./FinalProject/Mentor.js";
import ChatRoom from "./FinalProject/ChatRoom.js";



const AppRoutes = props => {
  return (
    <div className="container">
      <Switch>
        <Route name="home" exact path="/" component={FinalProject} />
        <Route name="user" exact path="/User" component={User} />
        <Route name="mentor" exact path="/Mentor" component={Mentor} />
        <Route name="ChatRoom" exact path="/ChatRoom" component={ChatRoom} />
      </Switch>
    </div>
  );
};

export default AppRoutes;
