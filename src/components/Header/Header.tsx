import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import userImage from "../../assets/b.png"


export default class Header extends Component {
  render() {
    return (
      <section className=" w-full fixed h-16 p-2.5 shadow-2xl">
        <div className="h-full flex">
          <section className="h-full w-1/2 flex items-center">
            <img className="pl-6 w-24 h-12" src={userImage}></img>
          </section>
          <section className="h-full w-1/2 flex items-center gap-10 justify-end pr-4">

            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/"}>Contact Us</NavLink>
            <NavLink to={"/"}>Profile</NavLink>

          </section>
        </div>
      </section>
    );
  }
}
