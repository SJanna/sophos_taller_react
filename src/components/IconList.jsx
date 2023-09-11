import "./styles/IconList.css";
import React, { Component } from 'react'
import { useState } from "react";

export class IconList extends Component {
  render() {
    const {isActive} = this.props.info;
    return (
      <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="icon-bar">
        <a id="profile" href="#" onClick={this.props.onChange} name="profile">
          {isActive==="profile" && <hr />}
          <i className="fa fa-user" style={isActive==="profile"? {color:"#adff2f"} : {color:"#b8b8b8"}}></i>
        </a>
        <a id="mail" href="#" onClick={this.props.onChange} name="mail">
          {isActive==="mail" && <hr />}
          <i className="fa fa-envelope" style={isActive==="mail"? {color:"#adff2f"} : {color:"#b8b8b8"}}></i>
        </a>
        <a id="calendar" href="#" onClick={this.props.onChange} name="calendar">
          {isActive==="calendar" && <hr />}
          <i className="fa fa-calendar" style={isActive==="calendar"? {color:"#adff2f"} : {color:"#b8b8b8"}}></i>
        </a>
        <a id="map" href="#" onClick={this.props.onChange} name="map">
          {isActive==="map" && <hr />}
          <i className="fa fa-map" style={isActive==="map"? {color:"#adff2f"} : {color:"#b8b8b8"}}></i>
        </a>
        <a id="phone" href="#" onClick={this.props.onChange} name="phone">
          {isActive==="phone" && <hr />}
          <i className="fa fa-phone" style={isActive==="phone"? {color:"#adff2f"} : {color:"#b8b8b8"}}></i>
        </a>
        <a id="lock" href="#" onClick={this.props.onChange} name="lock">
          {isActive==="lock" && <hr />}
          <i className="fa fa-lock" style={isActive==="lock"? {color:"#adff2f"} : {color:"#b8b8b8"}}></i>
        </a>
      </div>
    </>

    )
  }
}

export default IconList