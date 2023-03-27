import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <section className="bg-blue-400 w-full fixed h-16 p-2.5">
        <div className="h-full flex">
          <section className="h-full w-1/2 flex items-center">
            <h1 className="pl-6 text-xl">Sample Logo</h1>
          </section>
          <section className="h-full w-1/2 flex items-center gap-10 justify-end pr-2">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="hello">Contact Us</a>
            <a href="sample">Profile</a>
          </section>
        </div>
      </section>
    );
  }
}
