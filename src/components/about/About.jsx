import React from "react";
import icons from "../Icons";
import "./about.css"

const About = () => {
  return (
    <div id="about">
    <div className="abouts">
      <div className="aboutContainer">
        <div className="do">
          <h1>What I do</h1>
        </div>
        <div className="infor">
          <span>
            I'm a skilled and passionate website developmanet with experience in
            creating visually appealing, and user-friendly website. I have a
            great understanding of design and I have a keen eye details. I'm
            profficient in HTML, CSS and javascript as well as design software
            for photo and many other web stuff
          </span>
        </div>
        <div className="unifux">
          <div className="img">
            <img src={icons.thumbnail6} alt="" />
          </div>
          <div>
            <h3>Unifux design</h3>
            <p>this is a drama text, you can write your own content here</p>
          </div>
        </div>
        <div className="unifux">
          <div className="img">
            <img src={icons.thumbnail4} alt="" />
          </div>
          <div>
            <h3>Website design</h3>
            <p>this is a drama text, you can write your own content here</p>
          </div>
        </div>
        <div className="unifux">
          <div className="img">
            <img src={icons.thumbnail3} alt="" />
          </div>
          <div>
            <h3>APP design</h3>
            <p>this is a drama text, you can write your own content here</p>
          </div>
        </div>
      </div>
    </div></div>
  );
};

export default About;
