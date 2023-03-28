import { TextField } from "@mui/material";
import { Component } from "react";
import Header from "../../components/Header";

export default class Contact extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="p-6 mt-20">
          <span className="flex flex-col space-y-3 text-center">
            <h3>Contact Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              accusantium quia dolorum eaque pariatur inventore obcaecati,
              quaerat earum cupiditate aliquid. Architecto et tempore incidunt
              corrupti eum veniam tempora qui nam. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Repudiandae dolores totam,
              laudantium molestiae a nihil aliquid eligendi dolor quas vero est
              quo labore voluptas deleniti eum atque possimus, non in! Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Officia amet
              saepe tempora mollitia aut, rem impedit esse commodi magni fuga?
              Laudantium vitae eos commodi exercitationem ipsam, ab magnam
              aliquam dolorum?
            </p>
          </span>

          <div className="mt-3">
            <form className="w-full py-8 px-32 flex flex-col space-y-3">
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                placeholder="Enter your valid Email here"
                fullWidth={true}
                required
              />
              <TextField
                label="Message"
                type="textl"
                variant="outlined"
                placeholder="Enter your Message here"
                fullWidth={true}
                multiline
                minRows={5}
                maxRows={Infinity}
                required
              />
              <button className="w-full bg-accent-navy-200 text-white py-2 rounded">
                <h6>Submit</h6>
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
