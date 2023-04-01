import { Component } from "react";
import { Link } from "react-router-dom";
import trees from "../../assets/Delicious Only.gif";

// import trees from '../../assets/1.png'

export default class Login extends Component {
  render() {
    return (
      <div className="w-full  h-screen flex">
        <div className="grid grid-cols-1 rounded-xl md:grid-cols-2 m-auto h-[550px] shadow-2xl shadow-gray-600 sm:max-w-[900px]">
          <div className="w-full h-[550px] hidden md:block">
            <img className="w-full h-full rounded-xl" src={trees} alt="/" />
          </div>
          <div className="p-4 flex flex-col justify-around">
            <form>
              <h2 className="text-2xl font-bold text-center mb-8">
                mGunawardhana
              </h2>
              <div className="flex flex-col  justify-center items-center gap-2">
                <input
                  className="border p-2"
                  type="text"
                  placeholder="Username"
                />
                <input
                  className="border p-2"
                  type="password"
                  placeholder="Password"
                />
              </div>

              <Link to={"/home"}>
                <button className="w-full py-2 rounded-lg my-4 bg-green-400 hover:bg-green-600">
                  Sign In
                </button>
              </Link>
              <p className="text-center">Forgot Username or Password?</p>
            </form>
            <div className="flex justify-center items-center">
              <button className="w-1/3 justify py-2 rounded-lg my-4 bg-green-600 hover:bg-green-600">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
