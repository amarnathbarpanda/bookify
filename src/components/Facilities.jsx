import React, { useContext } from "react";
import Block from "./Block";
import "./Facilities.css";
// import {Fdata} from "../data/Fdata";
import {GlobalContext} from '../GlobalContext/StateProvider';

function Facilities() {
  const {facility} = useContext(GlobalContext);
  return (
    <div className="facilities">
      <h1>Our Facilities</h1>
      <div className="container">
        {facility.map((item) => {
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
