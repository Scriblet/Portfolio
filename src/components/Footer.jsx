/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import githubIcon from '../img/github-logo-mini.svg';
import linkedinIcon from '../img/linkedin-logo-mini.svg';
import '../styles/Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-container">
        <div className="footer-leftside">
          <div className="footer-name-area">
            <h1 className="footer-name">Lucas N.</h1>
            <a href="https://github.com/Scriblet" target="_blank" rel="noreferrer">
              <img className="footer-icons" src={githubIcon} alt="Ícone do Github" />
            </a>
            <a href="https://www.linkedin.com/in/lucas-nonato1/" target="_blank" rel="noreferrer">
              <img className="footer-icons" src={linkedinIcon} alt="Ícone do LinkedIn" />
            </a>
          </div>
          <div className="footer-text">
            <p>Página em constante construção</p>
            <p>Not Copyright 2020 - Lucas Nonato </p>
          </div>
        </div>
        <div className="footer-rightside">
          <a href="#header" className="footer-menu-itens">
            Home
          </a>
          <a href="#experience" className="footer-menu-itens">
            Experiência
          </a>
          <a href="#skills" className="footer-menu-itens">
            Habilidades
          </a>
          <a href="#portfolio" className="footer-menu-itens">
            Portfólio
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
