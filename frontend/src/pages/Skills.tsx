import React from 'react';
import skills from '../helpers/skills';
import SkillCard from '../components/SkillCard';
import { useTranslation } from 'react-i18next';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='container skill-container' id='skills'>
      <div>
        <h3>
            {t('skills.title')} <br />
            <span>{t('skills.titleSpan')}</span>
        </h3>
        <p>
            {t('skills.subtitle')} <br /> {t('skills.subtitle2')}
            {" "}
            <a href="https://github.com/brandao-rafael" target="_blank">
              {t('github.profile')}
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
