/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class Skill extends React.Component {
  render() {
    const {
      skillData: { icon, title, text },
    } = this.props;
    return (
      <div className="skill-container">
        <img src={icon} alt="Ícone da skill" className="skill-img" />
        <h2 className="skill-title">{title}</h2>
        <text className="skill-text">{text}</text>
      </div>
    );
  }
}

Skill.propTypes = {
  skillData: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Skill;
