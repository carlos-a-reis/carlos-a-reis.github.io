import styled from 'styled-components';

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-width: 100%;
  scroll-snap-align: center;

  @media (min-width: 1440px) {
    justify-content: start;
    align-content: center;
    align-self: center;
    flex-wrap: wrap;
    height: 512px;
  }

  @media (min-width: 760px) and (max-height: 732px) {
    justify-content: start;
    align-content: center;
    align-self: center;
    flex-wrap: wrap;
    height: 310px;
  }
`;

export const ProjectName = styled.h1`
  height: 70px;
  width: 310px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;

  @media (min-width: 760px) {
    font-size: 40px;
  }

  @media (min-width: 1440px) {
    order: 2;
    font-size: 32px;
    font-size: 40px;
    margin-left: 60px;
    text-align: start;
  }

  @media (min-width: 760px) and (max-height: 732px) {
    order: 2;
    font-size: 32px;
    margin-left: 60px;
    text-align: start;
    width: 250px;
  }
`;

export const Image = styled.img`
  height: 310px;
  width: 310px;
  border-radius: 20px;

  @media (min-width: 760px) {
    margin-top: 00px;
    height: 444px;
    width: 444px;
  }

  @media (min-width: 1440px) {
    height: 512px;
    width: 512px;
    margin-right: 60px;
    margin-top: 0;
  }

  @media (min-width: 760px) and (max-height: 732px) {
    height: 310px;
    width: 310px;
  }
`;

export const Description = styled.p`
  height: 130px;
  width: 310px;
  padding-top: 40px;
  font-size: 20px;
  text-align: center;

  @media (min-width: 760px) {
    font-size: 32px;
  }

  @media (min-width: 1440px) {
    order: 3;
    font-size: 32px;
    margin-left: 60px;
    text-align: start;
    padding-top: 119px;
  }

  @media (min-width: 760px) and (max-height: 732px) {
    order: 3;
    font-size: 24px;
    margin-left: 60px;
    text-align: start;
    padding-top: 30px;
    width: 250px;
  }
`;
