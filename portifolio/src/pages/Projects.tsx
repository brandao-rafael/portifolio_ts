import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../helpers/projects.js";

export default class Projects extends Component {
  render() {
    return (
      <div className="project-container">
        <h3>
          Look at Some <br />
          <span>Projects.</span>
        </h3>
        <p>
          These are just some js projects developed by me, you can see more on
          my <a href="https://github.com/brandao-rafael" target="_blank">github profile</a> 
        </p>
        <div className="project-content">
          {projects.map((project, index) => (
            <ProjectCard
              title={project.name}
              description={project.description}
              img={project.src}
              url={project.url}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }
}
