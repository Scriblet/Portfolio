/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import Experience from './Experience';

class ExperienceList extends React.Component {
  render() {
    const { experienceData } = this.props;
    return (
      <div className="experience-list">
        {experienceData.map((experience, index) => (
          <Experience index={index} experienceData={experience} key={experienceData.experience} />
        ))}
      </div>
    );
  }
}

ExperienceList.propTypes = { experienceData: PropTypes.arrayOf(PropTypes.object).isRequired };

export default ExperienceList;
