/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class Experience extends React.Component {
  render() {
    const colors = ['#3EC850', '#3C84C7', '#E95D90'];
    const { index } = this.props;
    const {
      experienceData: { id, experience, text },
    } = this.props;
    return (
      <div className="experience-info">
        <h1 className="experience-info-id">{`${id}`}</h1>
        <h3
          style={{ color: colors[index] }}
          className="experience-info-title"
        >{`${experience}`}</h3>
        <text className="experience-info-text">{text}</text>
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
  index: PropTypes.number.isRequired,
};

export default Experience;
