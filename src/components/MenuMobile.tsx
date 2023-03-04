import React from 'react';
import { BarraGradienteMobile } from '../style/Globals';
import { MenuContainer, MenuMobile, NavItensMobile } from '../style/Header';

interface Props {
  ativo: boolean;
  handleAtivo: Function | any;
}

export default function MenuMobileComponent({ ativo, handleAtivo }: Props) {
  return (
    <MenuMobile className={`menu-mobile ${ativo ? 'ativo' : ''}`}>
      <MenuContainer className="menu-container">
        <NavItensMobile className="nav-itens-mobile">
          <li className="nav-item" onClick={handleAtivo}>
            <a href="#projetos">Projetos</a>
          </li>
          <li className="nav-item" onClick={handleAtivo}>
            <a href="#conhecimentos">Conhecimentos</a>
          </li>
          <li className="nav-item" onClick={handleAtivo}>
            <a href="#sobreMim">Sobre Mim</a>
          </li>
          <li className="nav-item" onClick={handleAtivo}>
            <a href="#contato">Fale Comigo</a>
          </li>
        </NavItensMobile>

        <BarraGradienteMobile className="barra-gradiente-mobile"></BarraGradienteMobile>
      </MenuContainer>
      <div onClick={handleAtivo} className="sair-menu"></div>
    </MenuMobile>
  );
}
