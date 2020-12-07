/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class Experience extends React.Component {
  render() {
    const {
      experienceData: { id, experience, text },
    } = this.props;
    return (
      <div>
        <h1>{id}</h1>
        <h1>{experience}</h1>
        <h1>{text}</h1>
      </div>
    );
  }
}

Experience.propTypes = {
  experienceData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Experience;
