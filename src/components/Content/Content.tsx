import { type } from "os";
import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../pages/About";
import Home from "../../pages/Home";
import Counter from "../Counter";
import Customer from "../Customer";

export default class Content extends Component {

  render() {
    return (
      <div className="flex items-center justify-center h-screen">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>

      </div>
    );
  }
}
