import React from 'react';
import MentorsBoxes from './MentorBoxes';

const MentorListBoxes = (props) => {
    const boxes = props
        .mentors
        .map((item, index) => <MentorsBoxes
            key={index}
            item={item}
            handleMeeting = {props.handleMeeting.bind(null, item._id)} />)
    return (
        <div>
            {boxes}
        </div>
    );
};

export default MentorListBoxes;