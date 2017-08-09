import React from "react";
import { browserHistory } from "react-router";
import { Redirect } from "react-router-dom";
import SelectList from "../FinalProject/SelectList";

const axios = require("axios");

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        isMentor: false,
        username: "",
        password: "",
        name: "",
        bio: "",
        profilePic: "",
        industries: ""
      },
      redirect: false,
       Professions: [
                { name: "Front End Web Developer"},
                { name: "Back End Web Developer"},
                { name: "Full Stack Web Developer" },
                { name: "Big Data"},
                { name: "Cyber Security"}
            ]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.registerMentor = this.registerMentor.bind(this);
    this.handleProfessionChange = this.handleProfessionChange.bind(this);

  }
  handleProfessionChange(event){
       this.setState({
                  currentUser: {
                    username: this.state.currentUser.username,
                    password: this.state.currentUser.password,
                    isMentor: this.state.currentUser.isMentor,
                    name:  this.state.currentUser.name,
                    bio: this.state.currentUser.bio,
                    profilePic: this.state.currentUser.profilePic,
                    industries: event.target.value
                  }
                })
  }
  handleInputChange(event) {
     this.setState({
                  currentUser: {
                    username: this.state.currentUser.username,
                    password: this.state.currentUser.password,
                    isMentor: !this.state.currentUser.isMentor,
                    name:  this.state.currentUser.name,
                    bio: this.state.currentUser.bio,
                    profilePic: this.state.currentUser.profilePic,
                    industries: this.state.currentUser.industries
                  }
                })

  }
  handleSubmit(event) {
    event.preventDefault();
    let user = this.state.currentUser;
    let self = this;
    axios
      .post("/user/register", user)
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
  registerMentor(){
    if(!this.state.currentUser.isMentor){
      return false
    } else {
      return (
       <div> 
            <input
              type="name"
              className="form-control"
              id="name"
              placeholder="Name"
              required
              value={this.state.currentUser.name}
              onChange={event =>
                this.setState({
                  currentUser: {
                    username: this.state.currentUser.username,
                    password: this.state.currentUser.password,
                    name: event.target.value,
                    bio: this.state.currentUser.bio,
                    profilePic: this.state.currentUser.profilePic,
                    industries: this.state.currentUser.industries
                  }
                })}
            />
            <input
              type="bio"
              className="form-control"
              id="bio"
              placeholder="Bio"
              required
              value={this.state.currentUser.bio}
              onChange={event =>
                this.setState({
                  currentUser: {
                    username: this.state.currentUser.username,
                    password: this.state.currentUser.password,
                    name: this.state.currentUser.name,
                    bio: event.target.value,
                    profilePic: this.state.currentUser.profilePic,
                    industries: this.state.currentUser.industries
                  }
                })}
            />
            <input
              type="profilePic"
              className="form-control"
              id="profilePic"
              placeholder="Profile Pic url"
              required
              value={this.state.currentUser.profilePic}
              onChange={event =>
                this.setState({
                  currentUser: {
                    username: this.state.currentUser.username,
                    password: this.state.currentUser.password,
                    name: this.state.currentUser.name,
                    bio: this.state.currentUser.bio,
                    profilePic: event.target.value,
                    industries: this.state.currentUser.industries
                  }
                })}
            />
           <SelectList change={this.handleProfessionChange} Professions={this.state.Professions} />
</div>
      )
    }
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
                    password: this.state.currentUser.password,
                    name: this.state.currentUser.name,
                    bio: this.state.currentUser.bio,
                    profilePic: this.state.currentUser.profilePic,
                    industries: this.state.currentUser.industries
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
                    username: this.state.currentUser.username,
                    password: event.target.value,
                    name: this.state.currentUser.name,
                    bio: this.state.currentUser.bio,
                    profilePic: this.state.currentUser.profilePic,
                    industries: this.state.currentUser.industries
                  }
                })}             

                
            />

           
     <label>Want to be a Mentor ? <input name="isMentor" type="checkbox" checked={this.state.currentUser.isMentor} onChange={this.handleInputChange} />
        </label>
        {this.registerMentor()}
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
