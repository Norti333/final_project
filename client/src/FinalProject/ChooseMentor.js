import React from "react";
import SelectList from "./SelectList";

class ChooseMentor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Professions: [
                { name: "Front End Web Developer", Mentors: [] },
                { name: "Back End Web Developer", Mentors: [] },
                { name: "Full Stack Web Developer", Mentors: [] },
                { name: "Big Data", Mentors: [] },
                { name: "Cyber Security", Mentors: [] }
            ],
            value: ''
        }
        this.change = this.change.bind(this)
    }


    change(event) {
        this.setState({ value: event.target.value });
        console.log(this.state.value)
    }

    render() {
        return (
            <div>
                <h2>Choose Mentor Industry</h2>
                <SelectList change={this.change} Professions={this.state.Professions} />
            </div>
        )
    }
}

export default ChooseMentor;