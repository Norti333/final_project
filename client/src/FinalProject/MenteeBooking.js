import React from "react";
import { Link } from "react-router-dom";
import ChooseMentor from "./ChooseMentor";

class MenteeBooking extends React.Component {
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
        <h2>Welcome {this.renderUserName()} </h2>
        <ChooseMentor />
      </div>
    );
  }
}

export default MenteeBooking;
