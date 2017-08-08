import React from "react";
import { Link } from "react-router-dom";

class Mentee extends React.Component {
  constructor(props) {
    super(props);
    this.renderUserName=this.renderUserName.bind(this)
  }
renderUserName(){
  if(!this.props.user){
    return false
  } else {
    return this.props.user.username
  }
}
  render() {
    return (
      <div>
        <h1 className="text-center">
          Welcome {this.renderUserName()}!
        </h1>
        <div className="col-lg-6 text-center">
          <h2 className="">Book a Session</h2>
             <Link to="/mentee/menteebooking">
            <button type="button" className="btn btn-default">
              MenteeBooking
            </button>
          </Link>
        </div>
        <div className="col-lg-6 text-center">
          <h2 className="">Start a Session</h2>
          <Link to="/Mentee/MenteeSession">
            <button type="button" className="btn btn-default">
              MenteeSession
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Mentee;
