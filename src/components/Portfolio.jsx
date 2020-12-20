/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import JobsList from './JobsList';
import portfolioData from '../data/portfolioData';

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <p>PORTFÓLIO</p>
        <h2>Trabalhos que realizei nos últimos 3 anos</h2>
        <JobsList portfolioData={portfolioData} />
      </div>
    );
  }
}

export default Portfolio;
