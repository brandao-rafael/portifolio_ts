import React from 'react';
import skills from '../helpers/skills';
import SkillCard from '../components/SkillCard';

const Skills: React.FC = () => {
  return (
    <div className='skill-container'>
      <div>
        <h3>
            My <br />
            <span>Skills.</span>
        </h3>
      </div>
      <div>
        {skills.map((skill, index) => (
            <SkillCard name={skill.name} src={skill.src} key={`${index}-${skill.name}`} />
        ))}
      </div>
    </div>
  )
}

export default Skills;
