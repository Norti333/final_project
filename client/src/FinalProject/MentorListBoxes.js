import React from 'react';
import MentorsBoxes from './MentorBoxes';

const MentorListBoxes = (props) => {
    console.log(props.mentors)
    const boxes = props
        .mentors
        .map((item, index) => <MentorsBoxes
            key={index}
            item={item} />)
    return (
        <div>
            {boxes}
        </div>
    );
};

export default MentorListBoxes;