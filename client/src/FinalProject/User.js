import React from "react";
import { Link } from "react-router-dom";
import ChatRoom from "./ChatRoom";

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Welcome User</h2>
        <h3>Choose Industry</h3>
        <Link to="/User/ChooseMentor"><button>Choose Mentor</button></Link>
        <h3>Schedule Session</h3>
        <ChatRoom />
      </div>
    );
  }
}

export default User;
