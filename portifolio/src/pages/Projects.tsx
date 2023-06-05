import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../helpers/projects";
import { useTranslation } from "react-i18next";

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container project-container" id="projects">
      <div className="title-project-container">
        <h3>
        {t('projects.title')}<br />
          <span>{t('projects.titleSpan')}</span>
        </h3>
        <p>
          {t('projects.subtitle1')} <br /> {t('projects.subtitle2')}{" "}
          <a href="https://github.com/brandao-rafael" target="_blank">
          {t('github.profile')}
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
