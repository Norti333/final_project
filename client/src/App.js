import React from "react";
import ReactDom from "react-dom";
import WebFont from "webfontloader";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./FinalProject/Navbar";
import AppRoutes from "./AppRoutes";

const axios = require("axios");

WebFont.load({
  google: {
    families: ["Oswald", "Pacifico", "sans-serif"]
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      allUsers: null
    };
    this.getUsersOnLoad = this.getUsersOnLoad.bind(this);
    this.setUser = this.setUser.bind(this);
    this.logout = this.logout.bind(this);
  }

  getUsersOnLoad() {
    let self = this;
    axios
      .get("/auth/getUsers")
      .then(function(res) {
        alert(`Welcome Back ${res.data.currentUser.username}!`);
        self.setState({
          currentUser: res.data.currentUser,
          allUsers: res.data.allUsers
        });
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  componentWillMount() {
    this.getUsersOnLoad();
  }

  setUser(data) {
    this.setState({ currentUser: data });
    let self = this;
    axios
      .get("/auth/getUsers")
      .then(function(res) {
        self.setState({
          allUsers: res.data.allUsers
        });
      })
      .catch(function(err) {
        console.log(err);
      });
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
