import styled from 'styled-components';

export const Main = styled.main`
  height: 100vh;
  background-color: #03001c;
  color: #b6eada;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media (min-width: 1440px) {
    flex-direction: row;
  }

  @media (min-width: 940px) and (max-height: 735px) {
    flex-direction: row;
  }
`;

export const Image = styled.img`
  height: 217px;
  width: 217px;
  border-radius: 25px;
  margin-bottom: 40px;

  @media (min-width: 760px) {
    height: 307px;
    width: 307px;
  }

  @media (min-width: 1440px) {
    height: 473px;
    width: 473px;
    margin-right: 80px;
    margin-bottom: 0;
  }

  @media (min-width: 940px) and (max-height: 732px) {
    margin-right: 40px;
    margin-bottom: 0;
  }
`;

export const Div = styled.div`
  @media (min-width: 1440px) {
    height: 473px;
  }
`;

export const Paragraph = styled.p`
  text-align: center;
  width: 310px;
  font-size: 16px;
  margin-bottom: 15px;

  @media (min-width: 760px) {
    width: 520px;
    font-size: 18px;
  }

  @media (min-width: 1440px) {
    text-align: start;
    font-size: 20px;
    margin-left: 80px;
  }

  @media (min-width: 940px) and (max-height: 732px) {
    text-align: start;
    margin-left: 40px;
  }
`;
