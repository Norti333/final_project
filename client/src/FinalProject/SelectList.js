import React from 'react';
import Options from "./Options"
const SelectList = (props) => {
    const boxes = props
        .Professions
        .map((item, index) => <Options
            key={index}
            item={item} />)
    return (
        <div>
            <select onChange={props.change}>
                <option disabled selected value>Please select a profession</option>
                {boxes}
            </select>
        </div>
    );
};

export default SelectList;


        //   <option value="Front End Web Developer">Front End Web Developer</option>
        //   <option value="Back End Web Developer">Back End Web Developer</option>
        //   <option value="Full Stack Web Developer">Full Stack Web Developer</option>
        //   <option value="Big Data">Big Data</option>
        //   <option value="Cyber Security">Cyber Security</option>
