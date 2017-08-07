import React from "react";
import { Link } from "react-router-dom";

class FinalProject extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Welcome to Oraculi!!!</h1>
        <Link to="/Mentee">
          <button type="button" className="btn btn-default">
            Mentee
          </button>
        </Link>
        <Link to="/Mentor">
          <button type="button" className="btn btn-default">
            Mentor
          </button>
        </Link>
      </div>
    );
  }
}

export default FinalProject;
