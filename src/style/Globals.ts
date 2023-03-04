import styled from 'styled-components';
import { colors, fonts } from '../style/theme';

export const BarraGradiente = styled.div`
  width: 100%;
  height: 2px;
  /* background: linear-gradient(90deg, #808e9b 9%, #5a87ae 31%, #0be881 61%, #ff3f34 91%); */
  background-color: ${colors.corDestaque};
`;

export const BarraGradienteMobile = styled(BarraGradiente)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: $cordestaque;
  /* background: linear-gradient(90deg, #808e9b 9%, #5a87ae 31%, #0be881 61%, #ff3f34 91%); */
  display: grid;
  place-items: center;
`;

export const UnavailableStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${colors.letras};
  height: 100vh;

  .img-dev {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    img {
      width: 380px;
      @media (min-width: 992px) {
        width: 520px;
      }
    }
  }
`;

export const ContainerInfoUnavailable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;

  h1 {
    font-size: 22px;
  }
  p {
    margin-top: 20px;
    font-size: 15px;

    a {
      text-decoration: none;
    }
  }
`;

export const LinksUteisUnavailable = styled.div`
  display: flex;
  flex-direction: column;
  .btns {
    display: flex;
    justify-content: space-around;

    button {
      padding: 5px;
      background-color: ${colors.corDestaque};
      border: 1px solid ${colors.corDestaque};
      border-radius: 2px;
      color: ${colors.cor2};
      transition: 0.2s linear;
      font-family: ${fonts.font2};

      &:hover {
        box-shadow: rgba(255, 255, 255, 0.24) 0px 3px 8px;
      }
    }
  }
  .info-porque {
    margin-top: 20px;
    text-align: center;
    padding: 0 20px;
    height: 10px;
    opacity: 0;
    transition: 0.2s linear;
    font-size: 15px;
    z-index: 1;
    max-width: 600px;

    &.ativo {
      opacity: 1;
      height: 100px;
    }
    a {
      text-decoration: none;
    }
  }

  .links-uteis {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 20px;
    color: ${colors.cor1};
    transition: 0.3s;

    .link {
      z-index: 1000;
      width: 50px;
      height: 50px;
      /* border-radius: 100%; */
      color: ${colors.cor2};
      font-size: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      transition: 0.3s;
      text-align: start;
      padding: 10px;

      i {
        z-index: 2;
      }

      &::after {
        position: absolute;
        opacity: 1;
        color: transparent;
        content: '';
        font-size: 20px;
        margin-left: 40px;
        z-index: 1;
      }

      &.telegram::after {
        content: 'Telegram';
      }
      &.linkedin::after {
        content: 'Linkedin';
      }
      &.email::after {
        content: 'Gmail';
      }
      &.github::after {
        content: 'GitHub';
      }

      &:hover::after {
        opacity: 1;
        color: ${colors.cor1};
      }

      &:hover {
        width: 150px;
        color: ${colors.cor1};
        background-color: ${colors.corDestaque};
        box-shadow: rgba(255, 255, 255, 0.24) 0px 3px 8px;
        justify-content: start;
      }
    }
  }
`;
