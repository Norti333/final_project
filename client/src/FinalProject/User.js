import React from "react";
import { Link } from "react-router-dom";
import ChatRoom from "./ChatRoom";
import SelectList from "./SelectList";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Professions: [
        { name: "Front End Web Developer", Mentors: [] },
        { name: "Back End Web Developer", Mentors: [] },
        { name: "Full Stack Web Developer", Mentors: [] },
        { name: "Big Data", Mentors: [] },
        { name: "Cyber Security", Mentors: [] }
      ]
    }
  }

  render() {
    return (
      <div>
        <h2>Welcome User</h2>
        <h3>Choose Industry</h3>
        <SelectList Professions={this.state.Professions} />
        <h3>Schedule Session</h3>
        <ChatRoom />
      </div>
    );
  }
}

export default User;
