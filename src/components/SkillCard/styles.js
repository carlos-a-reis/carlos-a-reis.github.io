import styled from 'styled-components';

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 185px;
  height: 125px;

  @media (min-width: 760px) {
    width: 250px;
    height: 180px;
  }

  @media (min-width: 1440px) {
    width: 260px;
    height: 200px;
  }
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;

  @media (min-width: 760px) {
    width: 90px;
    height: 90px;
  }
`;

export const SkillName = styled.p`
  text-align: center;
  font-size: 20px;
  height: 40px;
  width: 170px;

  @media (min-width: 760px) {
    font-size: 28px;
    width: 250px;
    height: 60px;
  }
`;
