import React from "react";
import SelectList from "./SelectList";
import MentorListBoxes from "./MentorListBoxes"
class ChooseMentor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Professions: [
                {
                    name: "Front End Web Developer", Mentors: [{
                        img: "https://randomuser.me/api/portraits/med/men/83.jpg",
                        text: "I'm the best Mentor, Choose me!!",
                        name: "Joe McGee"
                    }]
                },
                {
                    name: "Back End Web Developer", Mentors: [{
                        img: "https://randomuser.me/api/portraits/med/men/63.jpg",
                        text: "I'm the worst Mentor, I'll get you hired and fired",
                        name: "Jerry sanders!"
                    }, {
                        img: "https://randomuser.me/api/portraits/med/men/61.jpg",
                        text: "Im average, think about me...",
                        name: "Stanly Green"
                    }]
                },
                { name: "Full Stack Web Developer", Mentors: [] },
                { name: "Big Data", Mentors: [] },
                { name: "Cyber Security", Mentors: [] }
            ], value: '', mentors: []
        }
        this.change = this.change.bind(this)
        this.renderMentors = this.renderMentors.bind(this)
    }

    renderMentors(prof) {
        let index = ""
        for (let i = 0; i < this.state.Professions.length; i++) {
            if (this.state.Professions[i].name === prof) {
                index = i;
                break
            }
        }
        this.setState({ mentors: this.state.Professions[index].Mentors })
    }

    change(event) {
        this.renderMentors(event.target.value)
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div id='mentor-page'>
                <h2>Choose Mentor's Industry</h2>
                <SelectList change={this.change} Professions={this.state.Professions} />
                <hr/>
                <MentorListBoxes mentors={this.state.mentors} />
            </div>
        )
    }
}

export default ChooseMentor;