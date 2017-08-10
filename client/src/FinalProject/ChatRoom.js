import React from "react";
import { Link } from "react-router-dom";
import Form from "./form";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.connectToSession = this.connectToSession.bind(this);
    this.state = {
      mySession: null,
      myPublisher: null
    };
  }

  connectToSession(data) {
    if (this.state.mySession) {
      let session = this.state.mySession;
      let publisher = this.state.myPublisher;
      session.unpublish(publisher);
      session.disconnect();
      this.setState({ mySession: null, myPublisher: null });
      alert("you have left the chat");
    }

    let session = OT.initSession(data.apiKey, data.sessionId);
    this.setState({mySessiion:session});
    let publisher = OT.initPublisher("publisher");

    this.setState({ mySession: session, myPublisher: publisher });

    session.on({
      sessionConnected: function(event) {
        session.publish(publisher);
      },
      streamCreated: function(event) {
        let subContainer = document.createElement("div");
        subContainer.id = "stream-" + event.stream.streamId;
        document.getElementById("subscriber").appendChild(subContainer);
        session.subscribe(event.stream, subContainer);
      }
    });
    session.connect(data.token, function(err) {
      if (err) {
        console.log(`Unable to Connect :( :  + ${err.message}`);
      } else {
        console.log("Connected to the Session.");
      }
    });
  }
    componentWillUnmount() {
        let session = this.state.mySessiion;
        session.disconnect();
        alert("you have left the chat");
    }

  componentWillUnmount() {
    if (this.state.mySession) {
      let session = this.state.mySession;
      let publisher = this.state.myPublisher;
      session.unpublish(publisher);
      session.disconnect();
      this.setState({ mySession: null, myPublisher: null });
      alert("you have left the chat");
    }
  }

  render() {
    return (
      <div >
        <div>
          <Form connectToSession={this.connectToSession} />
        </div>
        <div className="col-lg-12" id="videos">
          <div id="subscriber" />
          <div id="publisher" />
        </div>
      </div>
    );
  }
}

export default ChatRoom;
