import React from "react";
import { Switch, Route } from "react-router-dom";
import FinalProject from "./FinalProject";
import Register from "./Register";
import Login from "./Login";
import Page404 from "./FinalProject/common/404";
import User from "./FinalProject/User";
import Mentor from "./FinalProject/Mentor";

const AppRoutes = props => {
  return (
    <div className="container">
      <Switch>
        <Route name="home" exact path="/" render={routesProps => <FinalProject {...routesProps} user={props.user} />}/>
        <Route name="register" exact path="/register" render={routesProps => <Register {...routesProps} {...props} />}/>
        <Route name="login" exact path="/login" render={routesProps => <Login {...routesProps} {...props} />}  />
        <Route name="user" exact path="/User" component={User} />
        <Route name="mentor" exact path="/Mentor" component={Mentor} />
      </Switch>
    </div>
  );
};

export default AppRoutes;