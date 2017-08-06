import React from "react";
import {Link} from "react-router-dom"

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="wrapper">
                {this.props.children}
            </div>
        );
    }
}

export default Header;
