import React from "react";
import SelectList from "./SelectList";
import MentorListBoxes from "./MentorListBoxes"
import MeetingForm from "./Meetings";

const axios = require("axios");

class ChooseMentor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Professions: [
                { name: "Front End Web Developer"},
                { name: "Back End Web Developer"},
                { name: "Full Stack Web Developer" },
                { name: "Big Data"},
                { name: "Cyber Security"}
            ], value: '', mentors: [], mentorId:null
        }
        this.change = this.change.bind(this);
        this.renderMentors = this.renderMentors.bind(this);
        this.handleMeeting = this.handleMeeting.bind(this);
        this.handleMentorPick = this.handleMentorPick.bind(this);
        this.handleSetMeeting = this.handleSetMeeting.bind(this);


    }
    handleSetMeeting(date){
        let newMeeting = {
            date: date,
            menteeId:this.props.userId,
            mentorId:this.state.mentorId
        }
        let self = this;
        axios.post('/meeting/newmeeting', newMeeting) .then(function(res){
            self.setState({mentorId:null})
            let date = new Date(res.data.date)
            alert("Meeting Set at: "+ date)
        }).catch(function(error) {console.log(error)})
    }
    handleMeeting(mentorId){
            this.setState({mentorId: mentorId});
    }
    handleMentorPick(){
        if(!this.state.mentorId){
            return (
            <MentorListBoxes mentors={this.state.mentors} handleMeeting= {this.handleMeeting} />
            )
        } else{
            return (
                <MeetingForm handleSetMeeting={this.handleSetMeeting}/>
            )
        }
    }
    renderMentors(prof) {
        let tempArray = this.props.mentors.slice()
        let newTempArray = tempArray.filter(function(tempArray){
             return tempArray.industries === prof
        })
        this.setState({ mentors: newTempArray })
    }

    change(event) {
        this.renderMentors(event.target.value)
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div id='mentor-page'>
                <h3>Choose Mentor's Industry</h3>
                <SelectList change={this.change} Professions={this.state.Professions} />
                {this.handleMentorPick()}
                <hr/>
            </div>
        )
    }
}

export default ChooseMentor;