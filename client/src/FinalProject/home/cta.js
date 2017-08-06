import React from "react";
import {Link}from "react-router-dom"

class Cta extends React.Component {
  constructor(props) {
    super(props);
  }

    render() {
    return (
        <section id="cta" className="main special">
            <h2>Ready to take action?</h2>
            <p>Starting can be the hardest part of taking action.<br />Today we are offering great deals for signing up as a first time mentee. <br /> You only get one chance at life. Why traverse it alone when our mentors can help you strive for greatness!
            </p>
            <ul className="actions">
                <li><Link to= "#" className="button big">Get Started</Link></li>
            </ul>
        </section>
    );
  }
}

export default Cta;