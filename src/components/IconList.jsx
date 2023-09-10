import React from "react";
import "./styles/IconList.css";
import { useState } from "react";

const IconList = () => {
  const [isActive, setIsActive] = useState("profile");

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div class="icon-bar">
        <a id="profile" href="#" onClick={() => setIsActive("profile")}>
          {isActive==="profile" && <hr />}
          <i class="fa fa-user" style={isActive==="profile"? {color:"#adff2f"} : {color:"#b8b8b8"}}></i>
        </a>
        <a id="mail" href="#" onClick={() => setIsActive("mail")}>
          {isActive==="mail" && <hr />}
          <i class="fa fa-envelope" style={isActive==="mail"? {color:"#adff2f"} : {color:"#b8b8b8"}}></i>
        </a>
        <a id="calendar" href="#" onClick={() => setIsActive("calendar")}>
          {isActive==="calendar" && <hr />}
          <i class="fa fa-calendar" style={isActive==="calendar"? {color:"#adff2f"} : {color:"#b8b8b8"}}></i>
        </a>
        <a id="map" href="#" onClick={() => setIsActive("map")}>
          {isActive==="map" && <hr />}
          <i class="fa fa-map" style={isActive==="map"? {color:"#adff2f"} : {color:"#b8b8b8"}}></i>
        </a>
        <a id="phone" href="#" onClick={() => setIsActive("phone")}>
          {isActive==="phone" && <hr />}
          <i class="fa fa-phone" style={isActive==="phone"? {color:"#adff2f"} : {color:"#b8b8b8"}}></i>
        </a>
        <a id="lock" href="#" onClick={() => setIsActive("lock")}>
          {isActive==="lock" && <hr />}
          <i class="fa fa-lock" style={isActive==="lock"? {color:"#adff2f"} : {color:"#b8b8b8"}}></i>
        </a>
      </div>
    </>
  );
};

export default IconList;
