import React from "react";
import "./Block.css";

function Block(props) {
  return (
    <div className="block">
      <div className="wrapper">
        <div className="title">
          <img src={props.imgSrc} alt={props.altImg} className="icon" />
          <h3 className="head__text">{props.heading}</h3>
        </div>
        <p className="text">{props.text}</p>
      </div>
    </div>
  );
}

export default Block;
