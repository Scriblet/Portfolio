/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import valueImg from '../img/multiracial-hands-coming-together.jpg';

class Values extends React.Component {
  render() {
    return (
      <div className="value-container">
        <div className="value-text-container">
          <h1 className="value-text-title">Filosofia & Valores</h1>
          <p className="value-text-body">
            Sou apaixonado por Tecnologia, desenvolvimento de soluções e empresas que trabalhem para
            desenvolver oportunidades e soluções que buscam uma equidade da sociedade
          </p>
          <a href="https://www.linkedin.com/in/lucas-nonato1/" target="_blank" rel="noreferrer">
            <p className="value-text-link">Veja meu LinkedIn</p>
          </a>
        </div>
        <div>
          <img src={valueImg} alt="Mãos multirraciais se juntando" className="value-img" />
          <a className="refer-img" href="https://br.freepik.com/fotos/mao">
            Mão foto criado por freepik - br.freepik.com
          </a>
        </div>
      </div>
    );
  }
}

export default Values;
