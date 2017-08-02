import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Welcome User</h1>
                <a href='/'><button className="btn btn-default">Home</button></a>
                <a href='/ChatRoom'><button className="btn btn-default">ChatRoom</button></a>
            </div>
        );
    }
}

export default User;
