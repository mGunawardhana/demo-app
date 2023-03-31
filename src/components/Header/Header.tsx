import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import myLogo from "../../assets/b.png";
import userImage from "../../assets/1177568.png";
import exitIcon from "../../assets/320140.png";

export default class Header extends Component {
  render() {
    const activeLink = "border-b-2 cursor-pointer";
    const normalLink = "cursor-pointer";

    return (
      <div className=" w-full fixed h-16 bg-white top-0 shadow-2xl">
        <div className="h-full flex">
          <div className="h-full w-1/2 flex items-center">
            <img className="pl-6 w-24 h-12" src={myLogo}></img>
          </div>
          <div className="h-full w-1/2 flex items-center gap-12 justify-end pr-4">
            <NavLink
              to={"/home"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              About
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Contact Us
            </NavLink>
            <NavLink to={"/profile"}>
              <img src={userImage} alt="userImage" className="w-8 h-8" />
            </NavLink>

            <NavLink to={"/"}>
              <img src={exitIcon} alt="exitIcon" className="w-6 h-6" />
            </NavLink>

            {/* <NavLink
              to={"/login"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Login
            </NavLink> */}
          </div>
        </div>
      </div>
    );
  }
}
