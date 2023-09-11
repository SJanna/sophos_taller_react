import "./styles/HeaderText.css";
import React, { Component } from "react";

export class HeaderText extends Component {
 state={}
  render() {
    const {text, data} = this.props.info;
    return (
      <div className="header">
        <p>{text}</p>
        <h1>{data}</h1>
      </div>
    );
  }
}

export default HeaderText;
