import React from "react";
import Block from "./Block";
import "./Facilities.css";
import {Fdata} from "../data/Fdata";

function Facilities() {
  return (
    <div className="facilities">
      <h1>Our Facilities</h1>
      <div className="container">
        {Fdata.map((item, index) => {
          return (
            <Block
              imgSrc={item.icon}
              altImg={item.alt_txt}
              heading={item.title}
              text={item.text}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Facilities;
