import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  togglestring() {
    if (this.props.user) {
      return (
        <ul className="nav navbar-nav navbar-right">
          <p className="navbar-text userp">
            {this.props.user}
          </p>
          <li className="navbar-text">
            <a onClick={this.props.logout}>
              Logout {" "}
              <span
                className="glyphicon glyphicon-log-out"
                aria-hidden="true"
              />
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/Register">
              Register{" "}
              <span className="glyphicon glyphicon-user" aria-hidden="true" />
            </Link>
          </li>
          <li>
            <Link to="/Login">
              Login{" "}
              <span className="glyphicon glyphicon-log-in" aria-hidden="true" />
            </Link>
          </li>
        </ul>
      );
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/">
                    Home{" "}
                    <span
                      className="glyphicon glyphicon-home"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              </ul>
              {this.togglestring()}
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
export default NavBar;
