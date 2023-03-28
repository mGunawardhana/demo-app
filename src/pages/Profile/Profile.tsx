import { Component } from "react";
import Header from "../../components/Header";

export default class Profile extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="mt-20">
          <h1>Profile Page</h1>
        </div>
      </>
    );
  }
}
