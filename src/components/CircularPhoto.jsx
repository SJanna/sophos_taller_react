import React from "react";
import "./styles/CircularPhoto.css";

const CircularPhoto = ({ src, alt }) => {
  return (
    <div className="img-border">
      <img src={src} alt={alt} />;
    </div>
  );
};

export default CircularPhoto;
