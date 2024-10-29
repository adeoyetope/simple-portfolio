import React, { useState } from "react";
import "./navbar.css";
import icons from "../Icons";
import { Link } from "react-router-dom";
import Icons from "../Icons";

const Navbar = () => {
  // const [showNavbar, setShowNavbar] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navContainer">
      <div className="navLogo">
        <Link to="/">
          <img src={icons.home} alt="" />
        </Link>
      </div>

      <div className="navContents">
        <Link to="/about" activeClass="active">
          About
        </Link>
        <Link to="/works" activeClass="active">
          Portfolio
        </Link>
        <Link to="/client" activeClass="active">
          Client
        </Link>{" "}
      </div>
      <div className="contact">
        <button>
          {" "}
          <img src={icons.messages} alt="" /> <p>Contact me</p>
        </button>
      </div>
      {/* phone set up */}

      <div className="">
        <div className="navMen">
          <img
            src={Icons.menu}
            alt=""
            onClick={() => setShowMenu(!showMenu)}
            className="showmenu"
          />
        </div>
        <div
          className="navPhone"
          style={{ display: showMenu ? "block" : "none" }}
        >
          <Link to="/" className="navList">
            Home
          </Link>
          <Link
            to="/about"
            // activeClass="active"
            className="navList"
            // style={{ display: showMenu ? "none" : "block" }}
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
          <Link
            to="/works"
            // activeClass="active"
            className="navList"
            // style={{ display: showMenu ? "none" : "block" }}
            onClick={() => setShowMenu(false)}
          >
            Portfolio
          </Link>
          <Link
            to="/client"
            // activeClass="active"
            className="navList"
            // style={{ display: showMenu ? "none" : "block" }}
            onClick={() => setShowMenu(false)}
          >
            Client
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
