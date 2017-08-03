import React from "react";

class WoWApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Final Project</h1>
        <div id="videos">
          <div id="subscriber" />
          <div id="publisher" />
        </div>
      </div>
    );
  }
}

export default WoWApp;
