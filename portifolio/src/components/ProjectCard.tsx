import React from "react";
import IProjectCardProps from "../interfaces/IProjectCardProps";
import { useTranslation } from "react-i18next";

const ProjectCard: React.FC<IProjectCardProps> = ({
  img,
  title,
  description,
  url,
}) => {
  const { t } = useTranslation();

  return (
    <div className="container-card">
      <img src={img} alt="project cover" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {t('projectCard.link')}
      </a>
    </div>
  );
};

export default ProjectCard;
