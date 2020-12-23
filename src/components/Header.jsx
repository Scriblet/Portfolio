/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div id="header" className="header">
        <h3>Lucas N.</h3>
        <div className="header-menu">
          <a href="#experience" className="header-menu-itens">
            Experiência
          </a>
          <a href="#skills" className="header-menu-itens">
            Habilidades
          </a>
          <a href="#portfolio" className="header-menu-itens">
            Portfolio
          </a>
          <a href="#contact" className="header-menu-itens contact-menu">
            Contato
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
