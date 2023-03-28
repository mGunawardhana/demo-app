import React, { Component } from 'react'

type CounterProps = {initValue: number;};

type CounterState = { count: number; };


export default class Counter extends Component<CounterProps,CounterState> {
    constructor(props:CounterProps) {
        super(props);
        this.state = {
            count: this.props.initValue,
        };
    }

    increaseValue = () => {
        this.setState({count:this.state.count+1});
    };

    decreaseValue = () => {
        this.setState({ count: this.state.count - 1 })
    };

  render() {
    return (
     <div className='h-80 border
       bg-slate-800 text-white px-32 flex justify-center items-center
        flex-col gap-6 rounded-lg shadow-lg'>
            <h1>{this.state.count}</h1>
            <div className='flex gap-6 '>
                <button
                    className='text-4xl border-2 w-16 h-10 rounded-lg'
                    onClick={this.decreaseValue }
                >-</button>
                <button className='text-4xl border-2 w-16 h-10 rounded-lg'
                    onClick={ this.increaseValue}
                >+</button>
            </div>
        </div>
    )
      //01:01:09
  }
}
