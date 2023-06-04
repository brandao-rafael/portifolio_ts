import React from 'react';
import skills from '../helpers/skills';
import SkillCard from '../components/SkillCard';

const Skills: React.FC = () => {
  return (
    <div className='container skill-container' id='skills'>
      <div>
        <h3>
            My <br />
            <span>Skills.</span>
        </h3>
        <p>
            Here are a few skills developed by me. <br /> You can see more on my 
            {" "}
            <a href="https://github.com/brandao-rafael" target="_blank">
                github profile
            </a>
        </p>
      </div>
      <div className='skill-content'>
        {skills.map((skill, index) => (
            <SkillCard name={skill.name} src={skill.src} key={`${index}-${skill.name}`} />
        ))}
      </div>
    </div>
  )
}

export default Skills;
