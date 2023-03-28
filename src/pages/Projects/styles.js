import styled from 'styled-components';

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-color: #03001c;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 116px);
  color: #b6eada;

  @media (min-width: 760px) {
    height: calc(100% - 133px);
  }

  @media (min-width: 1440px) {
    height: calc(100% - 172px);
    margin-top: 20px;
  }
`;

export const Projects = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  margin-top: 44px;
  overflow-x: hidden;

  @media (min-width: 760px) {
    margin-top: 60px;
  }

  @media (min-width: 1440px) {
    margin-top: 0;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 25px;
`;

export const IL = styled.i`
  position: fixed;
  bottom: 80px;
  left: 90px;
  color: #b6eada;
  font-size: 42px;
  font-weight: 700;
  text-align: end;
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
  }

  @media (min-width: 760px) {
    bottom: 0;
    top: 47%;
    left: 0;
    margin-left: 32px;
    width: 24px;
    height: 60px;
    font-size: 62px;
  }

  @media (min-width: 1440px) {
    margin-left: 52px;
    font-size: 98px;
    font-weight: 400;
  }
`;

export const IR = styled.i`
  position: fixed;
  bottom: 80px;
  right: 80px;
  color: #b6eada;
  font-size: 42px;
  font-weight: 700;
  text-align: end;
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
  }

  @media (min-width: 760px) {
    bottom: 0;
    top: 47%;
    right: 0;
    height: 60px;
    margin-right: 20px;
    font-size: 62px;
  }

  @media (min-width: 1440px) {
    margin-right: 40px;
    font-size: 98px;
    font-weight: 400;
  }
`;
