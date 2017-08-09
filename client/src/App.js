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
      mentors: null
    };
    this.getUsersOnLoad = this.getUsersOnLoad.bind(this);
    this.setUser = this.setUser.bind(this);
    this.logout = this.logout.bind(this);
  }

  getUsersOnLoad() {
    let self = this;
    axios
      .get("/user")
      .then(function(res) {
        alert(`Welcome Back ${res.data.currentUser.username}!`);
        let allUsers = res.data.allUsers;
        let mentorArr = [];
        for (let i = 0; i < allUsers.length; i++) {
          if (allUsers[i].mentor) {
            mentorArr.push(allUsers[i]);
          }
        }
        self.setState({
          currentUser: res.data.currentUser,
          mentors: mentorArr
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
      .get("/user")
      .then(function(res) {
        let allUsers = res.data.allUsers;
        let mentorArr = [];
        for (let i = 0; i < allUsers.length; i++) {
          if (allUsers[i].mentor) {
            mentorArr.push(allUsers[i]);
          }
        }
        self.setState({
          mentors: mentorArr
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
        .get("/user/logout")
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
            <AppRoutes
              setUser={this.setUser}
              user={this.state.currentUser}
              mentors={this.state.mentors}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDom.render(<App />, document.getElementById("react-app"));
