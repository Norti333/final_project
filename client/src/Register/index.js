import React from "react";
import { browserHistory } from "react-router";
import { Redirect } from "react-router-dom";

const axios = require("axios");

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        username: "",
        password: ""
      },
      redirect: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let user = this.state.currentUser;
    let self = this;
    axios
      .post("/auth/register", user)
      .then(function(res) {
        alert(`Welcome ${res.data.username}!`);
        self.props.setUser(res.data.username);
        self.setState({
          currentUser: { password: "", username: "" },
          redirect: true
        });
      })
      .catch(function(error) {});
  }
  render() {
    let redirect = this.state.redirect;
    if (redirect) {
      return <Redirect to="/" />;
    } else {
      return (
        <form action="#" id="getRegisterForm" onSubmit={this.handleSubmit}>
          <h3>Register</h3>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Username"
              required
              value={this.state.currentUser.username}
              onChange={event =>
                this.setState({
                  currentUser: {
                    username: event.target.value,
                    password: this.state.currentUser.password
                  }
                })}
            />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              required
              value={this.state.currentUser.password}
              onChange={event =>
                this.setState({
                  currentUser: {
                    password: event.target.value,
                    username: this.state.currentUser.username
                  }
                })}
            />
            <span className="input-group-btn">
              <button className="btn btn-default" type="submit">
                Register!
              </button>
            </span>
          </div>
        </form>
      );
    }
  }
}

export default Register;
