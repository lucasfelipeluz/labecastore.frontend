import React, { useState } from 'react';
import MenuMobileComponent from '../components/MenuMobile';
import NavItensComponent from '../components/NavItens';
import { BarraGradiente, BarraGradienteMobile } from '../style/Globals';
import { HeaderStyle, NavBar, NavButton, NavItens, TitlePortfolio } from '../style/Header';

export default function Header() {
  const [toggleMenuMobile, setToggleMenuMobile] = useState<boolean>(false);

  const handleToggleMenuMobile = () => {
    setToggleMenuMobile(!toggleMenuMobile);
  };

  return (
    <HeaderStyle>
      <NavBar className="container-fluid container-lg">
        <NavButton onClick={handleToggleMenuMobile}>
          <div className="burger" data-burger="inativo">
            <div className={`burger-button ${toggleMenuMobile ? 'ativo' : ''}`}></div>
            <div className={`burger-button ${toggleMenuMobile ? 'ativo' : ''}`}></div>
            <div className={`burger-button ${toggleMenuMobile ? 'ativo' : ''}`}></div>
          </div>
        </NavButton>
        <TitlePortfolio>
          <p>Portfólio</p>
        </TitlePortfolio>
        <NavItensComponent />
        <MenuMobileComponent ativo={toggleMenuMobile} handleAtivo={handleToggleMenuMobile} />
      </NavBar>
      <BarraGradiente />
    </HeaderStyle>
  );
}
