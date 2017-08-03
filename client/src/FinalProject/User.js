import React from "react";
import {Link}from "react-router-dom"
import ChatRoom from "./ChatRoom"

class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Welcome User</h1>
                  <ChatRoom/>
            </div>
        );
    }
}

export default User;