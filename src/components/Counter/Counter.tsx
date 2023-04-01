import { Component } from "react";

type CounterProps = {};

type CounterState = { count: number };

export default class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Component Mounted...");
  }

  componentDidUpdate() {
    console.log("Component Updated...");
  }

  decreaseValue = () => {
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count - 1,
    }));
  };

  increaseValue = () => {
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div className="p-10">
        <h1>Count: {this.state.count}</h1>

        <div className="flex space-x-3 mt-5">
          <button
            disabled={this.state.count === 10 ? true : false}
            className="border border-green-800 px-4 py-2 text-green-800 rounded-xl hover:bg-green-800 hover:text-white"
            onClick={this.increaseValue}
          >
            Increase
          </button>
          <button
            disabled={this.state.count === 0 ? true : false}
            className="border border-red-800 px-4 py-2 rounded-xl text-red-800 hover:bg-red-800 hover:text-white"
            onClick={this.decreaseValue}
          >
            Decrease
          </button>
        </div>
      </div>
    );
  }
}
