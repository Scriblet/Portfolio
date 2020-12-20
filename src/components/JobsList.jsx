/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import Job from './Job';

class JobsList extends React.Component {
  render() {
    console.log(this.props);
    const { portfolioData } = this.props;
    return (
      <div>
        <div>
          {portfolioData.map((job, index) => (
            <Job index={index} jobData={job} key={portfolioData.id} />
          ))}
        </div>
      </div>
    );
  }
}

JobsList.propTypes = { portfolioData: PropTypes.arrayOf(PropTypes.object).isRequired };

export default JobsList;
