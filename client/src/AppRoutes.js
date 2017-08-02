import React from "react";
import { Switch, Route } from "react-router-dom";
import FinalProject from "./FinalProject";
import VideoChat from "./FinalProject/VideoChat.js";

const AppRoutes = props => {
  return (
    <div className="container">
      <Switch>
        <Route name="home" exact path="/" component={FinalProject} />
        <Route name="room" exact path="/room"  component={VideoChat}/>
      </Switch>
    </div>
  );
};

export default AppRoutes;
