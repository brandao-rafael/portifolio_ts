import React from "react";
import ISkillCard from "../interfaces/ISkillCard";

const SkillCard: React.FC<ISkillCard> = ({ name, src }) => {
  return (
    <div className="skill-card">
      <img src={src} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default SkillCard;
