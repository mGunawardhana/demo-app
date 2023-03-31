import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import userImage from "../../assets/b.png"


export default class Header extends Component {
  render() {
     const activeLink = "border-b-2 cursor-pointer";
    const normalLink = "cursor-pointer";

    return (
      <div className=" w-full fixed h-16 bg-white top-0 shadow-2xl">
        <div className="h-full flex">
          <div className="h-full w-1/2 flex items-center">
            <img className="pl-6 w-24 h-12" src={userImage}></img>
          </div>
          <div className="h-full w-1/2 flex items-center gap-10 justify-end pr-4">

            <NavLink to={"/"} className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }>Home</NavLink>
            <NavLink to={"/about"}className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }>About</NavLink>
            <NavLink to={"/contact"} className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }>Contact Us</NavLink>
            <NavLink to={"/profile"} className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }>Profile</NavLink>
            <NavLink to={"/login"} className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }>Login</NavLink>

          </div>
        </div>
      </div>
    );
  }
}
