import React from "react";
import "./styles/HeaderText.css";

const HeaderText = ({ text, data}) => {
  return (
    <div className="header">
        <p>{text}</p>
        <h1>{data}</h1>
    </div>
  )
};

export default HeaderText;
