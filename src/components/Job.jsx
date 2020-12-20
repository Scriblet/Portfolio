/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class Job extends React.Component {
  render() {
    const {
      jobData: { img, title, text, alt },
    } = this.props;
    return (
      <div className="card-job">
        <img src={img} alt={alt} className="card-job-img" />
        <div className="card-job-texts-container">
          <h1 className="card-job-title">{title}</h1>
          <p className="card-job-text">{text}</p>
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
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default Job;
