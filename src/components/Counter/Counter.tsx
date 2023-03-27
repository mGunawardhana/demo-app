import React, { Component } from 'react'

type CounterProps = {
    initValue: number;
}

type CounterState = {
    count: number;
}

export default class Counter extends Component <CounterProps,CounterState> {
  render() {
    return (
      <div>Counter</div>
    )
  }
}
