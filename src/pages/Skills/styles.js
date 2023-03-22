import styled from 'styled-components';

export const Main = styled.main`
  height: 100vh;
  background-color: #03001c;
  color: #b6eada;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 55px 10px;
  padding-top: 104px;
  padding-bottom: 80px;
  overflow-y: auto;

  @media (min-width: 760px) {
    gap: 85px 30px;
    padding-top: 130px;
    padding-bottom: 80px;
  }

  @media (min-width:1440px) {
    gap: 95px 45px;
    padding-top: 145px;
    padding-bottom: 90px;
  }
`;
