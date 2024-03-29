import styled from 'styled-components';
import background from '../../assets/images/background.jpg';

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-color: #03001c;
`;

export const BackGround = styled.div`
  position: fixed;
  z-index: 0;
  height: 100%;
  width: 100%;
  background-image: url(${background});
  background-size: cover;
  background-position-x: 1000px;
  opacity: 0.2;

  @media (min-width: 1440px) {
    background-position-y: 50px;
    background-position-x: 0px;
  }

  @media (min-width: 1900px) {
    background-position-y: -180px;
    background-position-x: 0px;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  @media (min-width: 1440px) {
    align-items: flex-start;
  }
`;

export const Div = styled.div`
  width: 339px;
  color: #b6eada;

  @media (min-width: 760px) {
    width: 527px;
  }

  @media (min-width: 1440px) {
    width: 678px;
    margin-left: 81px;
  }
`;

export const H1 = styled.h1`
  text-align: center;
  font-size: 64px;
  font-weight: 700;

  @media (min-width: 760px) {
    font-size: 96px;
  }

  @media (min-width: 1440px) {
    font-size: 128px;
    text-align: left;
  }
`;

export const H6 = styled.h6`
  text-align: center;
  font-size: 18px;
  margin-top: 8px;

  @media (min-width: 760px) {
    font-size: 28px;
    margin-top: 11px;
  }

  @media (min-width: 1440px) {
    font-size: 36px;
    text-align: left;
  }
`;

export const Download = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  color: #b6eada;
  width: 227px;
  height: 63px;
  background-color: #301e67;
  border-radius: 8px;
  margin-top: 180px;

  &:hover {
    transform: scale(1.1);
    opacity: 90%;
  }

  @media (min-width: 760px) {
    width: 291px;
    height: 81px;
    margin-top: 250px;
  }

  @media (min-width: 760px) and (max-height: 732px) {
    width: 227px;
    height: 63px;
    margin-top: 80px;
  }

  @media (min-width: 1440px) {
    width: 341px;
    height: 95px;
    margin-top: 100px;
    margin-left: 81px;
  }
`;
