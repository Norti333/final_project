import React from "react";
import { Link } from "react-router-dom"

class MeetingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        date: "mm/dd/yyyy",
        time:"00:00"
    }
      this.onSubmitTime=this.onSubmitTime.bind(this)
  }
onSubmitTime(event){
  event.preventDefault()
  let time = this.state.date +"T"+this.state.time+":00" 
  var d = new Date(time)
 this.props.handleSetMeeting(d)
}
  render() {
    return (
     <form onSubmit={this.onSubmitTime} >
         <h3> Enter date</h3>
        <input type="date" className="form-control" value={this.state.date} onChange={event => this.setState({ date: event.target.value })}/>    
          <h3> Enter time</h3>
        <input type="time" className="form-control" value={this.state.time} onChange={event => this.setState({ time: event.target.value })}/>
        <button type="submit" className="btn btn-success" >Submit</button>
         </form>
    );
  }
}

export default MeetingForm;


