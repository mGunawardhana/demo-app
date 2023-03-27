import { type } from "os";
import { Component } from "react";
import Customer from "../Customer";



export default class Content extends Component {

  render() {
    return (
      <div className="flex items-center justify-center h-screen">
        <Customer {...{ id: "C001", name: "Maneesha", address: "Galle", salary: 12000.00 }} />
        <Customer {...{ id: "C002", name: "Dinithi", address: "Galle", salary: 12000.00 }} />
      </div>
    );
  }
}
