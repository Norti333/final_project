import React from "react";

class Mentor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Welcome Mentor</h1>
                <a href='/'><button className="btn btn-default">Home</button></a>
                <a href='/ChatRoom'><button className="btn btn-default">ChatRoom</button></a>
            </div>

        );
    }
}

export default Mentor;