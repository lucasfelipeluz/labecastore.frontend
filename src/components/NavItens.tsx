import React from 'react';
import { NavItens } from '../style/Header';

export default function NavItensComponent() {
  return (
    <NavItens>
      <li className="nav-item projetos">
        <a href="#projetos">Projetos</a>
      </li>
      <li className="nav-item conhecimentos">
        <a href="#conhecimentos">Conhecimentos</a>
      </li>
      <li className="nav-item sobre-mim">
        <a href="#sobreMim">Sobre mim</a>
      </li>
      <li className="nav-item contato">
        <a href="#contato">Contato</a>
      </li>
    </NavItens>
  );
}
