import React from "react";

class Mentor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            createSelectItems() {
            let items = [];
            for (let i = 0; i <= this.props.maxValue; i++) {
                items.push(<option key={i} value={i}>{i}</option>);
                //here I will be creating my options dynamically based on
                //what props are currently passed to the parent component
            }
            return items;
        }

        onDropdownSelected(e) {
            console.log("THE VAL", e.target.value);
            //here you will see the current selected value of the select input
        }

        export default Mentor;