import React from "react";
import {Link}from "react-router-dom"

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

    render() {
    return (
      <div>
    <header id="header" className="alt">
        <div className="inner">
            <h1>Oraculi</h1>
            <p>Find a Mentor to help you acheive greatness
                <Link to= "https://templated.co"/>
            </p>
        </div>
    </header>
      </div>
    );
  }
}

export default Header;
