import React from "react";
import { Switch, Route } from "react-router-dom";
import FinalProject from "./FinalProject";
import Register from "./Register";
import Login from "./Login";
import Page404 from "./FinalProject/common/404";
import Mentee from "./FinalProject/Mentee";
import MenteeBooking from "./FinalProject/MenteeBooking";
import MenteeSession from "./FinalProject/MenteeSession";
import Mentor from "./FinalProject/Mentor";

const AppRoutes = props => {
  return (
    <div className="container">
      <Switch>
        <Route
          name="home"
          exact
          path="/"
          render={routesProps => <FinalProject {...routesProps} {...props} />}
        />
        <Route
          name="register"
          exact
          path="/register"
          render={routesProps => <Register {...routesProps} {...props} />}
        />
        <Route
          name="login"
          exact
          path="/login"
          render={routesProps => <Login {...routesProps} {...props} />}
        />
        <Route
          name="mentee"
          exact
          path="/Mentee"
          render={routesProps => <Mentee {...routesProps} {...props} />}
        />
        <Route
          name="menteebooking"
          exact
          path="/Mentee/MenteeBooking"
          component={MenteeBooking}
        />
        <Route
          name="menteesession"
          exact
          path="/Mentee/MenteeSession"
          component={MenteeSession}
        />
        <Route name="mentor" exact path="/Mentor" component={Mentor} />
      </Switch>
    </div>
  );
};

export default AppRoutes;
