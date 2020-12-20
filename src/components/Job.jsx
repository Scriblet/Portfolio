/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class Job extends React.Component {
  render() {
    const {
      jobData: { img, title, text },
    } = this.props;
    return (
      <div>
        <img src={img} alt="Imagem do produto" />
        <div>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    );
  }
}

Job.propTypes = {
  jobData: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Job;
