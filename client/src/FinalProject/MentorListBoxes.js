import React from 'react';
import MentorsBoxes from './MentorBoxes';

const MentorListBoxes = (props) => {
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