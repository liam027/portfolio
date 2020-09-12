import React from 'react';
import './skillList.scss';

class SkillList extends React.Component {

  render() {
    return (
      <div id="skill-grid">
        <ul className="code-list">
          <li className="skill-bullet">HTML</li>
          <li className="skill-bullet">CSS / SCSS</li>
          <li className="skill-bullet">JavaScript</li>
          <li className="skill-bullet">React</li>
          <li className="skill-bullet">Python</li>
          <li className="skill-bullet">Ruby on Rails</li>
          <li className="skill-bullet">C#</li>
          <li className="skill-bullet">Java</li>
        </ul>          
        <ul className="program-list">
          <li className="skill-bullet">SQL</li>
          <li className="skill-bullet">Git</li>
          <li className="skill-bullet">Photoshop</li>
          <li className="skill-bullet">Unity</li>
          <li className="skill-bullet">Blender</li>
          <li className="skill-bullet">SolidWorks</li>
          <li className="skill-bullet">Autodesk Inventor</li>
          <li className="skill-bullet">AutoCAD</li>
        </ul>
      </div>
    )
  };
}

export default SkillList;




