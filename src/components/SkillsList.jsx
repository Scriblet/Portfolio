/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import Skill from './Skill';

class SkillsList extends React.Component {
  render() {
    const { skillsData } = this.props;

    return (
      <div>
        <div>
          <h1>Habilidades</h1>
          <p>
            Com habilidades em mais de 4 áreas diferentes do Desenvolvimento Web, buscando sempre me
            capacitar quando se trata de um projeto completo. Quaisquer que sejam suas necessidades,
            posso aceitar qualquer desafio.
          </p>
        </div>
        <div>
          {skillsData.map((skill) => (
            <Skill skillData={skill} />
          ))}
        </div>
      </div>
    );
  }
}

SkillsList.propTypes = { skillsData: PropTypes.arrayOf(PropTypes.object).isRequired };

export default SkillsList;
