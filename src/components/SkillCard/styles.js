import styled from 'styled-components';

export const Skill = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 185px;
  height: 125px;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 760px) {
    width: 250px;
    height: 180px;
  }

  @media (min-width: 1440px) {
    width: 230px;
    height: 170px;
  }
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;

  @media (min-width: 760px) {
    width: 80px;
    height: 80px;
  }
`;

export const SkillName = styled.p`
  text-align: center;
  font-size: 20px;
  height: 40px;
  width: 170px;

  @media (min-width: 760px) {
    font-size: 27px;
    width: 250px;
    height: 60px;
  }
`;
