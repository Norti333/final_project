import React from "react";
import SelectList from "./SelectList";
import MentorListBoxes from "./MentorListBoxes"
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
            ], value: '', mentors: []
        }
        this.change = this.change.bind(this)
        this.renderMentors = this.renderMentors.bind(this)
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
                <hr/>
                <MentorListBoxes mentors={this.state.mentors} />
            </div>
        )
    }
}

export default ChooseMentor;