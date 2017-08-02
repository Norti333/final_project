import React from "react";

class WoWApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Welcome to Oraculi!!!</h1>
        <a href='/User'><button className="btn btn-default">User</button></a>
        <a href='/Mentor'><button className="btn btn-default">Mentor</button></a>
      </div>

    );
  }
}

export default WoWApp;


