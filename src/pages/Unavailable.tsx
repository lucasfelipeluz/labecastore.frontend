import React, { useState } from 'react';
import {
  ContainerInfoUnavailable,
  LinksUteisUnavailable,
  UnavailableStyled,
} from '../style/Globals';
// @ts-ignore
import ilustracaoDev from '../assets/image/ilustracao-dev.png';

export default function Unavailable() {
  const [showTextPorque, setShowTextPorque] = useState<boolean>(false);

  const handleTextPorque = () => {
    setShowTextPorque(!showTextPorque);
  };

  return (
    <UnavailableStyled className="container-fluid container-lg">
      <div className="img-dev">
        <img src={ilustracaoDev} alt="" />
      </div>
      <ContainerInfoUnavailable>
        <h1>Opa! No momento meu Portfólio está indisponível.</h1>
      </ContainerInfoUnavailable>
      <LinksUteisUnavailable>
        <div className="btns">
          <button onClick={handleTextPorque}>Por quê?</button>
        </div>
        <div className={`info-porque ${showTextPorque ? 'ativo' : ''}`}>
          Antes ele era estático, ou seja, eu tinha que ir no código fonte atualizar as informações,
          o que era cansativo. Estou implementando um jeito mais dinâmico, onde o Front-End irá
          buscar os dados na{' '}
          <a href="https://github.com/lucasfelipeluz/portfolio.backend" target="_blank">
            minha API
          </a>{' '}
          que estará hospedada na internet.
        </div>
        <div className="links-uteis">
          <a href="https://t.me/lucasfelipeluz" target="_blank" className="link telegram">
            <i className="fab fa-telegram-plane"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/lucasfelipeluz/"
            target="_blank"
            className="link linkedin"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:lucasfelipeluz.dev@gmail.com" target="_blank" className="link email">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://github.com/lucasfelipeluz" target="_blank" className="link github">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </LinksUteisUnavailable>
    </UnavailableStyled>
  );
}
