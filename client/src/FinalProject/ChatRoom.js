import React from "react";

class ChatRoom extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Welcome to the ChatRoom</h1>
                <a href='/'><button className="btn btn-default">Home</button></a>
                <a href='/User'><button className="btn btn-default">User</button></a>
                <a href='/Mentor'><button className="btn btn-default">Mentor</button></a>
            </div>
        );
    }
}

export default ChatRoom;