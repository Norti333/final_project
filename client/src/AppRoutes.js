import React from "react";
import { Switch, Route } from "react-router-dom";
import FinalProject from "./FinalProject";
import Register from "./Register";
import Login from "./Login";
import Page404 from "./FinalProject/common/404";
import MenteeBooking from "./FinalProject/MenteeBooking";
import Mentor from "./FinalProject/Mentor";
import ChooseMentor from "./FinalProject/ChooseMentor";
import Mentee from "./FinalProject/Mentee";
import MenteeSession from "./FinalProject/MenteeSession";
import MeetingForm from "./FinalProject/Meetings";

const AppRoutes = props => {
  return (
    <div className="container-fluid">
      <Switch>
        <Route name="home" exact path="/" render={routesProps => <FinalProject {...routesProps} {...props} />} />
        <Route name="register" exact path="/register" render={routesProps => <Register {...routesProps} {...props} />} />
        <Route name="login" exact path="/login" render={routesProps => <Login {...routesProps} {...props} />} />
        <Route name="MenteeBooking" exact path="/mentee/menteebooking" render={routesProps => <MenteeBooking {...routesProps} {...props} />} />
        <Route name="mentor" exact path="/mentor" render={routesProps => <Mentor {...routesProps} {...props} />} />
        <Route name="ChooseMentor" exact path="/chooseMentor" render={routesProps => <ChooseMentor {...routesProps} {...props} />} />
        <Route name="mentee" exact path="/Mentee" render={routesProps => <Mentee {...routesProps} {...props} />} />
        <Route name="menteesession" exact path="/Mentee/MenteeSession" component={MenteeSession} />
         <Route name="menteeMeetings" exact path="/mentee/meeting" render={routesProps => <MeetingForm {...routesProps} {...props} />} />
      </Switch>
    </div>
  );
};

export default AppRoutes;