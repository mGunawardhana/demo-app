import React, { Component } from 'react';

type CustomerProps = {
  id: string;
  name: string;
  address: string;
  salary: number;
}

export default class Customer extends Component <CustomerProps>{
  render() {
    return (
        <div className='h-80 border
        bg-amber-700 text-white px-32 flex justify-center items-center
        flex-col gap-6 rounded-lg shadow-lg'>
        <h1>{this.props.id}</h1>
        <h1>{this.props.name}</h1>
        <h1>{this.props.address}</h1>
        <h1>{this.props.salary}</h1>
        </div>
    )
  }
}
