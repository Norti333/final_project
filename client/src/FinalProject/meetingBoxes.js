import React from "react";

const moment =require("moment");

class MeetingBoxes extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            date: null
        }
    }
    componentWillMount(){
     let a = this.props.item.date;
     let c = new Date(a);
     let d = moment(c).format("LLLL")
     this.setState({date:d})   
    }

    render(){
        return(
            <li> {this.state.date} </li>
        )
    }}


export default MeetingBoxes