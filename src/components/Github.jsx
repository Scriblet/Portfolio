/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import githubImg from '../img/github-logo.svg';

class Github extends React.Component {
  render() {
    return (
      <div className="github-container">
        <div className="github-text-container">
          <h1 className="github-text-title">Github</h1>
          <p className="github-text-body">
            Se você é uma pessoa que gosta de analisar códigos, recomendo fortemente que dê uma
            olhada no meu Github. É por lá que hospedo grande parte do meus códigos.
          </p>
          <a href="https://github.com/Scriblet" target="_blank" rel="noreferrer">
            <p className="github-text-link">Siga-me no Github</p>
          </a>
        </div>
        <div>
          <img src={githubImg} alt="Ícone do Github" className="github-img" />
        </div>
      </div>
    );
  }
}

export default Github;
