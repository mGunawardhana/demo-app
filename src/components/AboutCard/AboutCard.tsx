import { Component } from "react";

type AboutCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type AboutCardState = {};

export default class AboutCard extends Component<
  AboutCardProps,
  AboutCardState
> {
  render() {
    return (
      <div className="p-4 border border-slate-400 rounded text-center">
        <span className="flex justify-center items-center space-x-3">
          {this.props.icon}
          <h4>{this.props.title}</h4>
        </span>

        <p>{this.props.description}</p>
      </div>
    );
  }
}
