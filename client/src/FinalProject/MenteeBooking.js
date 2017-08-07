import React from "react";
import ChatRoom from "./ChatRoom";
import { Link } from "react-router-dom";

class MenteeBooking extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Book a Session.</h1>
        <div className="col-lg-12 text-center">
          <div>
            <h2>Choose a Category.</h2>
            <Link to="/Mentee">
              <button type="button" className="btn btn-default">
                Go Back.
              </button>
            </Link>
          </div>
          <div className="col-lg-6 text-center">
            <h2>Pick a Mentor.</h2>
          </div>
          <div className="col-lg-6 text-center">
            <h2>Pick a Time.</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default MenteeBooking;
