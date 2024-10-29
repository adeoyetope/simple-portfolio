import React from "react";
import Icons from "../Icons";
import "./works.css"


const Works = () => {
  return (
    <div className="works" id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDecrp">
        I take to look into scenerios in details to the rightful things to do a
        the right things to do at the right time
      </span>
      <div className="worksImage">
        <img src={Icons.thumbnail3} alt="" />
        <img src={Icons.thumbnail4} alt="" />
        <img src={Icons.thumbnail5} alt="" />
        <img src={Icons.thumbnail6} alt="" />
        <img src={Icons.thumbnail7} alt="" />
        <img src={Icons.thumbnail8} alt="" />
      </div>
      <button className="worksBtn"> See More</button>
    </div>
  );
};

export default Works;
