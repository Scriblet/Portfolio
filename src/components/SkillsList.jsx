/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import Skill from './Skill';

class SkillsList extends React.Component {
  render() {
    const { skillsData } = this.props;

    return (
      <div className="skills-container">
        <div className="skills-introduction">
          <h1 className="skills-introduction-title">Habilidades</h1>
        </div>
        <div className="skills-list">
          {skillsData.map((skill) => (
            <Skill skillData={skill} key={skillsData.title} />
          ))}
        </div>
      </div>
    );
  }
}

SkillsList.propTypes = { skillsData: PropTypes.arrayOf(PropTypes.object).isRequired };

export default SkillsList;
