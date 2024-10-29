import React from "react";
import icons from "../Icons";
import "./intro.css";
import ReactCurvedText from "react-curved-text";
import { Link } from "react-router-dom";

const Intro = () => {
  let style = { fill: "goldenrod", fontSize: "24px" };
  return (
    <div id="home">
      <div className="introcontainer">
        <div className="intro">
          <p className="hello">Hello</p>
          <h1 className="name">
            I'm <span>Topson</span>
          </h1>
          <h1 className="work">Website Designer</h1>
          <p className="mySelf">
            I'm a skilled and passionate website developmanet with experience in
            creating visually appealing, and user-friendly website
          </p>
          <button>
            <img src={icons.automobile} alt="" /> <span>Hire me</span>
          </button>
        </div>
        <div className="myImage">
          <img src={icons.worldIcon} alt="" />
          <div id="small" className={style}>
            {" "}
            <ReactCurvedText
              // id="small"
              width={250}
              height={250}
              cx={130}
              cy={-45}
              rx={170}
              ry={80}
              reversed={false}
              fill
              textPathProps={{ style: style }}
              startOffset={100}
              text="This is a small world"
            />{" "}
            {/* <p className="small">Small world</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
