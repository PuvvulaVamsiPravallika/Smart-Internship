
import React from 'react';
import './SkillSection.css';

const SkillSection = ({ skills }) => {
  return (
    <div className="skill-section">
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
            </div>
            <span className="skill-level-text">{skill.level}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
