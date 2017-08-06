import React from "react";
import {Link} from "react-router-dom"
// import "font-awesome"
class Banner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <section id="intro" className="main">
            <h2>Mentorships to Success</h2>
            <p>Our proven Mentors are highly skilled in various fields of study.<br /> The video chat room is your place to build a connection and gain guidance from the mentor of your choice.<br /> It can be tough to start on your journey to success, that
                is why our mentors have come to pass along their knowledge to the next generation.</p>
            <ul className="actions">
                <li><Link to= "#" className="button big">My Time is Now</Link></li>
            </ul>
        </section>
        );
    }
}

export default Banner;





