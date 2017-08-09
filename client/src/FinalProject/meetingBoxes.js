import React from "react";


class MeetingBoxes extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <li> {this.props.item.date} </li>
        )
    }}


export default MeetingBoxes