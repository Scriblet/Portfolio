/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import Experience from './Experience';

class ExperienceList extends React.Component {
  render() {
    const { experienceData } = this.props;
    return (
      <div className="experience-container">
        <h4 className="experience-tag">Experiência</h4>
        <h1 className="experience-briefing">
          Empresas onde trabalhei e Aprendizados que conquistei
        </h1>
        <div className="experience-list">
          {experienceData.map((experience, index) => (
            <Experience index={index} experienceData={experience} key={experienceData.experience} />
          ))}
        </div>
      </div>
    );
  }
}

ExperienceList.propTypes = { experienceData: PropTypes.arrayOf(PropTypes.object).isRequired };

export default ExperienceList;
