import React, { Component } from "react";
import CircularPhoto from "./CircularPhoto";
import HeaderText from "./HeaderText";
import IconList from "./IconList";
import "./styles/App.css";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: "profile",
      text:"My name is",
      data:"Shalem Janna",
    };
  }
  profile = {
    text: "My name is",
    data: "Shalem Janna",
  };
  mail = {
    text: "My email address is",
    data: "sjannadiaz@gmail.com",
  };
  calendar = {
    text: "My birthday is",
    data: "July XX, 2XXX",
  };
  map = {
    text: "My address is",
    data: "Calle XXb #XX -XXX",
  };
  phone = {
    text: "My phone number is",
    data: "301 XXX XXXX",
  };
  lock = {
    text: "My credentials are",
    data: "*********",
  };
  handleChange = (e) => {
    console.log(e.currentTarget.name);
    if (e.currentTarget.name === "profile"){
      this.setState({isActive: "profile", text: this.profile.text, data: this.profile.data});
    }
    else if (e.currentTarget.name === "mail"){
      this.setState({isActive: "mail", text: this.mail.text, data: this.mail.data});
    }
    else if (e.currentTarget.name === "calendar"){
      this.setState({isActive: "calendar", text: this.calendar.text, data: this.calendar.data});
    }
    else if (e.currentTarget.name === "map"){
      this.setState({isActive: "map", text: this.map.text, data: this.map.data});
    }
    else if (e.currentTarget.name === "phone"){
      this.setState({isActive: "phone", text: this.phone.text, data: this.phone.data});
    }
    else if (e.currentTarget.name === "lock"){
      this.setState({isActive: "lock", text: this.lock.text, data: this.lock.data});
    }
  };

  render() {
    return (
      <div className="main-container">
        <div className="Layout-header">
          <div className="photo-container">
            <CircularPhoto
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Avatar"
            />
          </div>
        </div>
        <div className="Layout-main">
          <div className="Layout-main-header">
            <HeaderText info={this.state}/>
          </div>
          <div className="Layout-main-content">
            <IconList onChange={this.handleChange} info={this.state}/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
