/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import JobsList from './JobsList';
import portfolioData from '../data/portfolioData';

class Portfolio extends React.Component {
  render() {
    return (
      <div className="jobs-list-container">
        <div className="jobs-list-texts">
          <p className="jobs-list-title">PORTFOLIO</p>
          <p className="jobs-list-text">Trabalhos que realizei nos últimos 3 anos</p>
        </div>
        <JobsList portfolioData={portfolioData} />
        <div className="jobs-list-soon">MAIS EM BREVE...</div>
      </div>
    );
  }
}

export default Portfolio;
