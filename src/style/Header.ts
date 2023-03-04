import styled from 'styled-components';
import { colors, fonts } from './theme';

export const HeaderStyle = styled.header`
  background-color: ${colors.header};
  height: 60px;
  position: relative;

  @media (min-width: 992px) {
    color: ${colors.letras};
    height: 55px;
  }
`;

export const NavBar = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  position: relative;
  z-index: 999;

  @media (min-width: 992px) {
    height: 53px;
    display: grid;
    grid-template-columns: 2fr 3fr;
    position: relative;
    z-index: 5;
  }
`;

export const NavButton = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  height: 100%;
  width: 50px;
  color: ${colors.letras};
  font-size: 35px;
  display: grid;
  place-items: center;

  @media (min-width: 992px) {
    display: none;
  }

  .burger {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .burger-button {
      height: 3px;
      width: 35px;
      border-radius: 20px;
      background-color: white;
      transition: 0.3s;

      &.ativo {
        &:nth-child(1) {
          transform: rotate(40deg) translate(9px, 9px);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          transform: rotate(-40deg) translate(9px, -9px);
        }
      }
    }
  }
`;

export const TitlePortfolio = styled.div`
  color: ${colors.letras};
  height: 100%;
  display: grid;
  place-items: center;
  font-size: 28px;
  user-select: none;

  @media (min-width: 992px) {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 28px;
    user-select: none;
    width: 100%;
  }
  p {
    @media (min-width: 992px) {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }
`;

export const NavItens = styled.ul`
  display: none;

  @media (min-width: 992px) {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
  }

  .nav-item {
    position: relative;

    a {
      height: 100%;
      transition: 0.5s;
      font-family: ${fonts.font1};
      font-size: 18px;
      color: ${colors.letras};
      text-decoration: none;
      text-align: center;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 25px;
        width: 1px;
        height: 2px;
        background: #1ad78a;
        bottom: 13px;
        z-index: 2;
        transition: 0.5s;
        opacity: 0;
        background-color: ${colors.corDestaque};
      }

      &:hover::after {
        width: 100%;
        opacity: 1;
      }
    }
  }
`;

export const MenuMobile = styled.div`
  position: fixed;
  top: -800px;
  z-index: 1;
  width: 100%;
  height: 100vh;
  transition: 0.3s;
  display: grid;
  grid-template-rows: 60% 40%;
  gap: 0;

  @media (min-width: 992px) {
    display: none;
  }

  &.ativo {
    top: 0px;
  }
`;

export const MenuContainer = styled.div`
  width: 100%;
  background-color: #181f24;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
`;

export const NavItensMobile = styled.ul`
  margin: 60px 0 50px 0;
  height: 90%;
  display: grid;
  gap: 10px;
  place-items: center;
  list-style-type: none;

  li {
    width: 100%;
    height: 50px;

    a {
      color: ${colors.letras};
      text-decoration: none;
      font-size: 22px;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    a:after {
      transition: 0.3s;
      content: '';
      width: 40px;
      height: 2px;
      background: red;
      position: absolute;
      opacity: 0;
    }

    a:hover:after {
      opacity: 1;
      content: '';
      height: 2px;
      background: #1ad78a;
      position: absolute;
      transform: translateY(18px);
    }
  }
`;
