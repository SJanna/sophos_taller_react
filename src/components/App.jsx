import React from "react";
import CircularPhoto from "./CircularPhoto";
import HeaderText from "./HeaderText";
import IconList from "./IconList";
import "./styles/App.css";

const App = () => {
  return (
    <div className="main-container">
      <div className="Layout-header">
        <div className="photo-container">
        <CircularPhoto src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar"/>
        </div>
      </div>
      <div className="Layout-main">
        <div className="Layout-main-header">
          <HeaderText text="My email address is" data="sjannadiaz@gmail.com" />
          </div>
        <div className="Layout-main-content">
          <IconList />
          </div>
      </div>
    </div>
  );
};

export default App;
