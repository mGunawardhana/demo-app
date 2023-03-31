import { type } from "os";
import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Profile from "../../pages/Profile";
import Counter from "../Counter";

export default class Content extends Component {
  render() {
    return (
      <div className="flex  justify-center h-screen">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </div>
    );
  }
}
