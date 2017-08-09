import React from "react";
import { Link } from "react-router-dom";
import ChatRoom from "./ChatRoom";
import MeetingForm from "./Meetings";
import MenteeSession from "./MenteeSession"
class Mentor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Welcome Mentor</h1>
        <MenteeSession/>
        </div>
    );
  }
}

export default Mentor;
