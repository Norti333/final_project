import React from "react";
import ChatRoom from "./ChatRoom";
import { Link } from "react-router-dom";

class MenteeSession extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Upcoming Sessions:</h1>
        <Link to="/mentee">
          <button type="button" className="btn btn-default">
            Go Back.
          </button>
        </Link>
        <hr/>
     <ChatRoom />
      </div>
    );
  }
}

export default MenteeSession;