import React from "react";
import ChatRoom from "./ChatRoom";
import { Link } from "react-router-dom";
import MeetingBoxes from "./MeetingBoxes";

const axios = require("axios");

class MenteeSession extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      dates:[]
    }
    this.showMeetings = this.showMeetings.bind(this)
  }

componentDidMount(){
  let user = this.props.user._id
  let self = this
  axios.get("/meeting/"+user).then(function(res){
    let tempArray = res.data.meetings;
    let date = new Date()
    let d = JSON.stringify(date)
    let upcomingMeetings = tempArray.filter(function(tempArray){
    return tempArray.date >= d
    });
  upcomingMeetings.sort(function(a,b){
  return new Date(a.date) - new Date(b.date);
});
  self.setState({dates:upcomingMeetings})
  }).catch(function(error) {console.log(error)})
}
showMeetings(){
if(!this.state.dates){
  return false
} else {
   const boxes = this.state.dates.map((item, index) => <MeetingBoxes
            key={index}
            item={item}
             />)
    return (
        <ul>
            {boxes}
        </ul>
    );
}
}
  render() {
    return (
      <div>
        <h1>Upcoming Sessions:</h1>
        {this.showMeetings()}
        <Link to="/mentee">
          <button type="button" className="btn btn-default">
            Go Back.
          </button>
        </Link>
        <hr/>
     <ChatRoom />
      </div>
    );
  }
}

export default MenteeSession;