import styled from 'styled-components';

export const Main = styled.main`
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

  @media (min-width: 760px) {
    position: fixed;
    top: 47%;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 0;
  }
`;

export const IL = styled.i`
  color: #b6eada;
  font-size: 42px;
  font-weight: 700;
  text-align: end;

  @media (min-width: 760px) {
    margin-left: 32px;
    width: 24px;
    font-size: 62px;
  }

  @media (min-width: 1440px) {
    margin-left: 52px;
    font-size: 98px;
    font-weight: 400;
  }
`;

export const IR = styled.i`
  color: #b6eada;
  font-size: 42px;
  font-weight: 700;
  text-align: end;

  @media (min-width: 760px) {
    margin-right: 20px;
    font-size: 62px;
  }

  @media (min-width: 1440px) {
    margin-right: 40px;
    font-size: 98px;
    font-weight: 400;
  }
`;
