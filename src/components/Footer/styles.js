import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 58px;
  background-color: #301E67;

  @media (min-width: 1440px) {
    height: 68px;
  }
`;

export const Contacts = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 273px;
`;

export const Img = styled.img`
  width: 24px;
`;
