/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h3>Lucas N.</h3>
        <div className="header-menu">
          <h3 className="header-menu-itens">Sobre</h3>
          <h3 className="header-menu-itens">Experiência</h3>
          <h3 className="header-menu-itens">Portfólio</h3>
          <h3 className="header-menu-itens contact-menu">Contato</h3>
        </div>
      </div>
    );
  }
}

export default Header;
