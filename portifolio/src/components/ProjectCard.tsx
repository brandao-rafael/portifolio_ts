import React, { Component } from "react";
import IProjectCardProps from "../interfaces/IProjectCardProps";

interface IProjectCardState {}

export default class ProjectCard extends Component<IProjectCardProps, IProjectCardState> {
  constructor(props: IProjectCardProps) {
    super(props);
  }

  render() {
    return (
      <div className="container-card">
        <img src={this.props.img} alt="project cover" />
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <a href={this.props.url} target="_blank">
          View Project
        </a>
      </div>
    );
  }
}
