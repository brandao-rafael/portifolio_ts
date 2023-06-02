import React from "react";
import IProjectCardProps from "../interfaces/IProjectCardProps";

const ProjectCard: React.FC<IProjectCardProps> = ({
  img,
  title,
  description,
  url,
}) => {
  return (
    <div className="container-card">
      <img src={img} alt="project cover" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
