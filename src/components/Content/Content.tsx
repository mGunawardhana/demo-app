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
        {/* <Customer {...{ id: "C001", name: "Maneesha", address: "Galle", salary: 12000.00 }} />
        <Customer {...{ id: "C002", name: "Dinithi", address: "Galle", salary: 12000.00 }} />
        <Counter {...{ initValue: 10 }} />
        <Counter {...{ initValue: 20 }} /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>

      </div>
    );
  }
}
