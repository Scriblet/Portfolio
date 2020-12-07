/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import Experience from './Experience';

class ExperienceList extends React.Component {
  render() {
    const { experiences } = this.props;
    return (
      <div>
        EXPERIÊNCIA
        <h1>
          Empresas onde trabalhei e <br />
          Aprendizados que conquistei
        </h1>
        <div className="movie-list">
          {experiences.map((experienceData) => (
            <Experience movie={experienceData} key={experienceData.id} />
          ))}
        </div>
      </div>
    );
  }
}

ExperienceList.propTypes = { experiences: PropTypes.arrayOf(PropTypes.object).isRequired };

export default ExperienceList;
