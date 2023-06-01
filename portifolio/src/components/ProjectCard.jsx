import React, { Component } from "react";

export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: props.img,
      url: props.url,
      title: props.title,
      description: props.description,
    };
  }

  render() {
    return (
      <div className="container-card">
        <img src={this.state.img} alt="project cover" />
        <h3>{this.state.title}</h3>
        <p>{this.state.description}</p>
        <a href={this.state.url} target="_blank">
          View Project
        </a>
      </div>
    );
  }
}
