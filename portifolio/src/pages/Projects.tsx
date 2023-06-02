import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../helpers/projects.js";

const Projects: React.FC = () => {
  return (
    <div className="project-container" id="projects">
      <div className="title-project-container">
        <h3>
          Look at Some <br />
          <span>Projects.</span>
        </h3>
        <p>
          Here are a few projects developed by me. <br /> You can see more on my{" "}
          <a href="https://github.com/brandao-rafael" target="_blank">
            github profile
          </a>
        </p>
      </div>
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
};

export default Projects;
