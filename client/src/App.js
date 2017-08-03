import React from "react";
import ReactDom from "react-dom";
import WebFont from "webfontloader";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./FinalProject/Navbar";
import AppRoutes from "./AppRoutes";

const axios = require("axios");

WebFont.load({
  google: {
    families: ["Oswald", "sans-serif"]
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
    this.getUser = this.getUser.bind(this);
    this.setUser = this.setUser.bind(this);
    this.logout = this.logout.bind(this);
  }

  getUser() {
    let self = this;
    axios
      .get("/auth/currentUser")
      .then(function(res) {
        alert(`Welcome Back ${res.data.username}!`);
        self.setState({ currentUser: res.data.username });
      })
      .catch(function(err) {
        console.log(err);
      });
  }

componentDidMount() {
    this.getUser();
  }

  setUser(user) {
    this.setState({ currentUser: user });
  }

  logout() {
    if (this.state.currentUser) {
      let self = this;
      axios
        .get("/auth/logout")
        .then(function(res) {
          alert(`Logged Out!`);
          self.setState({ currentUser: null });
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar user={this.state.currentUser} logout={this.logout} />
          <div>
            <AppRoutes setUser={this.setUser} user={this.state.currentUser} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDom.render(<App />, document.getElementById("react-app"));